# Albury Acoustics website

Standalone static website for the fictional Albury Acoustics company. Run `node build.mjs` after editing `product-data.mjs`, then preview with `ruby -run -e httpd . -p 4178`.

Public copy is derived from the Albury Acoustics company bible. It presents products, licensing, room work and research without private financial or family detail. Contact addresses use the reserved `.example` domain.

The expanded site contains eight detailed professional/reference product pages, five service pages, a filterable product library, technical specification tables, support and specialist enquiry flows. The build writes normalized product, specification and service registers into `../02_ALBURY_ACOUSTICS/data/`.

The `assets/` directory contains the existing room/research imagery and eight original fictional product renders. Published product specifications are fictional expanded canon derived from the locked family-level data.
