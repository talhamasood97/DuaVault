-- ============================================================
-- Dua Companion – Supabase Database Schema
-- Run this in Supabase SQL Editor
-- ============================================================

-- Enable full-text search extension (already enabled in Supabase)
-- create extension if not exists pg_trgm;

-- ─── Main duas table ─────────────────────────────────────────
create table if not exists public.duas (
  id                  serial primary key,
  slug                text not null unique,
  title               text not null,
  arabic_text         text not null,
  transliteration     text not null,
  translation         text not null,
  source_book         text not null,
  hadith_number       text,
  authenticity_grade  text not null check (authenticity_grade in ('SAHIH','HASAN','DA''IF','MAWDU''','QUDSI')),
  category            text not null check (category in (
    'daily-life','worship','protection','forgiveness',
    'travel','quranic','family','health','morning-evening'
  )),
  emotion_tags        text[] not null default '{}',
  situation_tags      text[] not null default '{}',
  scholar_verified    boolean not null default true,
  featured            boolean not null default false,
  daily_dua_eligible  boolean not null default false,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

-- ─── Full-text search vector ─────────────────────────────────
alter table public.duas
  add column if not exists search_vector tsvector
  generated always as (
    setweight(to_tsvector('english', coalesce(title, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(translation, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(transliteration, '')), 'C') ||
    setweight(to_tsvector('english', coalesce(array_to_string(situation_tags, ' '), '')), 'B') ||
    setweight(to_tsvector('english', coalesce(source_book, '')), 'D')
  ) stored;

-- ─── Indexes ─────────────────────────────────────────────────
create index if not exists duas_search_idx on public.duas using gin(search_vector);
create index if not exists duas_category_idx on public.duas (category);
create index if not exists duas_featured_idx on public.duas (featured) where featured = true;
create index if not exists duas_slug_idx on public.duas (slug);
create index if not exists duas_emotion_tags_idx on public.duas using gin(emotion_tags);

-- ─── Row Level Security ──────────────────────────────────────
alter table public.duas enable row level security;

-- Public read access (no user-generated content)
create policy "Public can read duas"
  on public.duas for select
  to anon, authenticated
  using (true);

-- Only service role can insert/update
create policy "Service role can manage duas"
  on public.duas for all
  to service_role
  using (true);

-- ─── Auto-update timestamp ───────────────────────────────────
create or replace function public.update_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists duas_updated_at on public.duas;
create trigger duas_updated_at
  before update on public.duas
  for each row execute function public.update_updated_at();

-- ─── Analytics view (optional) ───────────────────────────────
create or replace view public.dua_stats as
select
  category,
  count(*) as total,
  count(*) filter (where featured) as featured_count,
  count(*) filter (where authenticity_grade = 'SAHIH') as sahih_count,
  count(*) filter (where authenticity_grade = 'QUDSI') as qudsi_count
from public.duas
group by category
order by total desc;

-- ─── Hadith email subscribers ─────────────────────────────────────────────
create table if not exists public.hadith_subscribers (
  id                uuid default gen_random_uuid() primary key,
  email             text unique not null,
  name              text,
  confirmed         boolean default false,
  unsubscribe_token uuid default gen_random_uuid() unique not null,
  created_at        timestamptz default now()
);

-- Index for fast lookups
create index if not exists hadith_subscribers_email_idx on public.hadith_subscribers (email);
create index if not exists hadith_subscribers_token_idx on public.hadith_subscribers (unsubscribe_token);
create index if not exists hadith_subscribers_confirmed_idx on public.hadith_subscribers (confirmed);

-- RLS
alter table public.hadith_subscribers enable row level security;

-- Only the service role (server-side API routes) can read/write subscriber data.
-- The anon key has no access — subscriber emails are private.
-- (Service role bypasses RLS automatically in Supabase.)
