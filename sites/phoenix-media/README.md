# Phoenix Media website

Standalone static website for the fictional Phoenix Media.

Run `node build.mjs` after editing `project-data.mjs`, then preview with `ruby -run -e httpd . -p 4175` and open `http://127.0.0.1:4175/`.

The public copy is derived from the Phoenix Media company bible. It intentionally excludes private valuations, revenue, staff counts and family-conflict mechanics. Contact uses the reserved `.example` domain.

The expanded site contains a filterable work library, 12 individual film/series/audio/restoration pages, five operating-division pages, press and availability information, and an enquiry flow. The build writes the expanded project and credit registers into `../04_PHOENIX_MEDIA/data/`.

The `assets/` directory contains distinct fictional documentary stills for every title in the output slate. They are production assets for the story world, not claims about real films or people.
