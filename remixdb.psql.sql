PGDMP  #                    |            remixdb    16.3    16.3 $    
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16438    remixdb    DATABASE     �   CREATE DATABASE remixdb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE remixdb;
                postgres    false                        2615    16439    drizzle    SCHEMA        CREATE SCHEMA drizzle;
    DROP SCHEMA drizzle;
                postgres    false            S           1247    16450 
   popularity    TYPE     U   CREATE TYPE public.popularity AS ENUM (
    'unknown',
    'known',
    'popular'
);
    DROP TYPE public.popularity;
       public          postgres    false            �            1259    16441    __drizzle_migrations    TABLE     v   CREATE TABLE drizzle.__drizzle_migrations (
    id integer NOT NULL,
    hash text NOT NULL,
    created_at bigint
);
 )   DROP TABLE drizzle.__drizzle_migrations;
       drizzle         heap    postgres    false    6            �            1259    16440    __drizzle_migrations_id_seq    SEQUENCE     �   CREATE SEQUENCE drizzle.__drizzle_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE drizzle.__drizzle_migrations_id_seq;
       drizzle          postgres    false    6    217                       0    0    __drizzle_migrations_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE drizzle.__drizzle_migrations_id_seq OWNED BY drizzle.__drizzle_migrations.id;
          drizzle          postgres    false    216            �            1259    16485    cities    TABLE     �   CREATE TABLE public.cities (
    id integer NOT NULL,
    name character varying(256),
    country_id integer,
    popularity public.popularity
);
    DROP TABLE public.cities;
       public         heap    postgres    false    851            �            1259    16484    cities_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.cities_id_seq;
       public          postgres    false    219                       0    0    cities_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.cities_id_seq OWNED BY public.cities.id;
          public          postgres    false    218            �            1259    16492    contacts    TABLE     �   CREATE TABLE public.contacts (
    id integer NOT NULL,
    first character varying(25),
    last character varying(25),
    avatar character varying(25),
    twitter character varying(246),
    favorite boolean
);
    DROP TABLE public.contacts;
       public         heap    postgres    false            �            1259    16491    contacts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.contacts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.contacts_id_seq;
       public          postgres    false    221                       0    0    contacts_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.contacts_id_seq OWNED BY public.contacts.id;
          public          postgres    false    220            �            1259    16499 	   countries    TABLE     \   CREATE TABLE public.countries (
    id integer NOT NULL,
    name character varying(256)
);
    DROP TABLE public.countries;
       public         heap    postgres    false            �            1259    16498    countries_id_seq    SEQUENCE     �   CREATE SEQUENCE public.countries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.countries_id_seq;
       public          postgres    false    223                       0    0    countries_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.countries_id_seq OWNED BY public.countries.id;
          public          postgres    false    222            c           2604    16444    __drizzle_migrations id    DEFAULT     �   ALTER TABLE ONLY drizzle.__drizzle_migrations ALTER COLUMN id SET DEFAULT nextval('drizzle.__drizzle_migrations_id_seq'::regclass);
 G   ALTER TABLE drizzle.__drizzle_migrations ALTER COLUMN id DROP DEFAULT;
       drizzle          postgres    false    217    216    217            d           2604    16488 	   cities id    DEFAULT     f   ALTER TABLE ONLY public.cities ALTER COLUMN id SET DEFAULT nextval('public.cities_id_seq'::regclass);
 8   ALTER TABLE public.cities ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219            e           2604    16495    contacts id    DEFAULT     j   ALTER TABLE ONLY public.contacts ALTER COLUMN id SET DEFAULT nextval('public.contacts_id_seq'::regclass);
 :   ALTER TABLE public.contacts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            f           2604    16502    countries id    DEFAULT     l   ALTER TABLE ONLY public.countries ALTER COLUMN id SET DEFAULT nextval('public.countries_id_seq'::regclass);
 ;   ALTER TABLE public.countries ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223                      0    16441    __drizzle_migrations 
   TABLE DATA           E   COPY drizzle.__drizzle_migrations (id, hash, created_at) FROM stdin;
    drizzle          postgres    false    217   �%                 0    16485    cities 
   TABLE DATA           B   COPY public.cities (id, name, country_id, popularity) FROM stdin;
    public          postgres    false    219   �&                 0    16492    contacts 
   TABLE DATA           N   COPY public.contacts (id, first, last, avatar, twitter, favorite) FROM stdin;
    public          postgres    false    221   �&                 0    16499 	   countries 
   TABLE DATA           -   COPY public.countries (id, name) FROM stdin;
    public          postgres    false    223   �&                  0    0    __drizzle_migrations_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('drizzle.__drizzle_migrations_id_seq', 3, true);
          drizzle          postgres    false    216                       0    0    cities_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.cities_id_seq', 1, false);
          public          postgres    false    218                       0    0    contacts_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.contacts_id_seq', 1, true);
          public          postgres    false    220                       0    0    countries_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.countries_id_seq', 1, false);
          public          postgres    false    222            h           2606    16448 .   __drizzle_migrations __drizzle_migrations_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY drizzle.__drizzle_migrations
    ADD CONSTRAINT __drizzle_migrations_pkey PRIMARY KEY (id);
 Y   ALTER TABLE ONLY drizzle.__drizzle_migrations DROP CONSTRAINT __drizzle_migrations_pkey;
       drizzle            postgres    false    217            j           2606    16490    cities cities_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.cities DROP CONSTRAINT cities_pkey;
       public            postgres    false    219            l           2606    16497    contacts contacts_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.contacts DROP CONSTRAINT contacts_pkey;
       public            postgres    false    221            n           2606    16504    countries countries_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.countries DROP CONSTRAINT countries_pkey;
       public            postgres    false    223            o           1259    16510    name_idx    INDEX     E   CREATE UNIQUE INDEX name_idx ON public.countries USING btree (name);
    DROP INDEX public.name_idx;
       public            postgres    false    223            p           2606    16505 (   cities cities_country_id_countries_id_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_country_id_countries_id_fk FOREIGN KEY (country_id) REFERENCES public.countries(id);
 R   ALTER TABLE ONLY public.cities DROP CONSTRAINT cities_country_id_countries_id_fk;
       public          postgres    false    4718    223    219               �   x�-��m1��(��)��)Q����bQ�������.KA�-0��Y��\�]r;eZ�Gk��Kz�E��d�C�{:$�㸘*Z��ɢTl�@L��Tuf�{˫�ɕ�u�.͡-��P$6�����ܬ�7o}��.��-��6BY���b���1� >C            x������ � �         .   x�3�tM+J���tJ�IO���E�%�ى��E�i\1z\\\ <�T            x������ � �     