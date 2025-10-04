from logging.config import fileConfig
from sqlalchemy import engine_from_config, pool
from alembic import context
import os
from dotenv import load_dotenv

# Import your Base metadata for 'autogenerate' support
from core.models.user import Base  # adjust this import if needed

# Load environment variables from .env
load_dotenv()

# Alembic Config object — provides access to values in alembic.ini
config = context.config

# Set the database URL dynamically from environment variable
database_url = os.getenv("DATABASE_URL")
if not database_url:
    raise RuntimeError("DATABASE_URL not set in environment or .env file.")
config.set_main_option("sqlalchemy.url", database_url)

# Configure Python logging
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# Add model metadata for autogeneration
target_metadata = Base.metadata


def run_migrations_offline() -> None:
    """Run migrations in 'offline' mode.

    This configures the context with just a URL and not an Engine.
    Calls to context.execute() emit the given string to the script output.
    """
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    """Run migrations in 'online' mode.

    In this scenario we need to create an Engine
    and associate a connection with the context.
    """
    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(connection=connection,
                          target_metadata=target_metadata)

        with context.begin_transaction():
            context.run_migrations()


# Determine mode and execute
if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
