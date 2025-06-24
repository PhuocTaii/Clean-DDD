## 1. Architecture Diagram

```
+-------------------+
|   Presentation    |  (Controllers, APIs, UI)
+-------------------+
          |
          v
+-------------------+
|   Application     |  (Use Cases, Services)
+-------------------+
          |
          v
+-------------------+
|     Domain        |  (Entities, Aggregates, Value Objects)
+-------------------+
          |
          v
+-------------------+
| Infrastructure    |  (Repositories, Data Access, External Services)
+-------------------+
```
<b>Call Direction</b>
- Presentation -> Application -> Domain
- Application <-> Infrastructure
- Domain is independent (no inward dependencies)

## 2. Typical Folder Tree
```
cleanddd/
├── src/
│   ├── presentation/      # Controllers, API endpoints
│   ├── application/       # Use cases, DTOs, services
│   ├── domain/            # Entities, value objects, domain services
│   └── infrastructure/    # Repositories, data sources, external APIs
├── tests/
├── README.md
├── package.json / pyproject.toml / etc.
└── ...

```
## 3. Call Directions (Arrows)
- <code>presentation</code> -> <code>application</code>
- <code>application</code> -> <code>domain</code>
- <code>application</code> <-> <code>infrastructure</code>
- <code>domain</code> (no dependencies)