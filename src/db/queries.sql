-- CREATED TABLES - 20th FEB 2025 --
CREATE TABLE
    users (
        user_id BIGSERIAL PRIMARY KEY NOT NULL,
        username VARCHAR(50) UNIQUE NOT NULL,
        email_address VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(100) UNIQUE NOT NULL,
        bio TEXT,
        profile_picture TEXT,
        created_at TIMESTAMP DEFAULT NOW (),
        updated_at TIMESTAMP DEFAULT NOW ()
    );

CREATE TABLE
    posts (
        post_id BIGSERIAL PRIMARY KEY NOT NULL,
        user_id BIGINT REFERENCES users (user_id) ON DELETE CASCADE NOT NULL,
        content TEXT,
        image_url TEXT,
        created_at TIMESTAMP DEFAULT NOW ()
    );

CREATE TABLE
    likes (
        like_id BIGSERIAL PRIMARY KEY NOT NULL,
        post_id BIGINT REFERENCES posts (post_id) ON DELETE CASCADE NOT NULL,
        user_id BIGINT REFERENCES users (user_id) ON DELETE CASCADE NOT NULL,
        created_at TIMESTAMP DEFAULT NOW ()
    );

CREATE TABLE
    comments (
        comment_id BIGSERIAL PRIMARY KEY NOT NULL,
        post_id BIGINT REFERENCES posts (post_id) ON DELETE CASCADE NOT NULL,
        user_id BIGINT REFERENCES users (user_id) ON DELETE CASCADE NOT NULL,
        content TEXT,
        created_at TIMESTAMP DEFAULT NOW ()
    );

-- ADDED UPDATED AT COLUMN IN COMMENTS TABLE - 21st FEB 2025 --
ALTER TABLE comments
ADD COLUMN updated_at TIMESTAMP DEFAULT NOW ();

-- ALTERED COMMENT COLUMN CONSTRAINT IN POSTS TABLE - 22nd FEB 2025 --
ALTER TABLE posts
ALTER COLUMN content
SET
    NOT NULL;