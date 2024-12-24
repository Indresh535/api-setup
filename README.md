For monitoring SQL databases, particularly for tracking performance, speed, and deadlock issues, here are some reliable tools that can provide comprehensive insights:

1. Datadog
Features: Monitors database performance with detailed query insights, wait times, and deadlock tracking.
Pros: Integrates with many databases (SQL Server, PostgreSQL, MySQL, etc.), offers real-time metrics, and provides alerts for query performance and latency.
Use Case: Ideal for organizations that need centralized monitoring across multiple systems, including application-level insights.
2. SolarWinds Database Performance Analyzer
Features: Tracks deadlocks, slow-running queries, I/O waits, and other performance metrics for databases like SQL Server, Oracle, MySQL, and PostgreSQL.
Pros: Provides both historical and real-time monitoring, including recommendations for performance tuning.
Use Case: Good for detailed diagnostics and optimization recommendations, especially in SQL Server environments.
3. Microsoft SQL Server Management Studio (SSMS)
Features: SQL Server-specific tool that includes Activity Monitor for checking live performance and deadlock tracking through deadlock graphs.
Pros: Free for SQL Server users, with built-in query tuning, deadlock reporting, and performance insights.
Use Case: Ideal for SQL Server users looking for a free, in-depth tool within the Microsoft ecosystem.
4. New Relic
Features: Offers detailed query and transaction monitoring, deadlock detection, and response time tracking for SQL and NoSQL databases.
Pros: Great for environments that need holistic application and database monitoring; integrates well with other parts of the stack.
Use Case: Suited for large, diverse infrastructures needing detailed insights on both applications and databases.
5. Prometheus with Grafana
Features: Provides performance monitoring, custom metric tracking, and alerting for various databases through exporters like pg_exporter for PostgreSQL and mysqld_exporter for MySQL.
Pros: Open-source, flexible, and highly customizable with real-time alerting.
Use Case: Best for teams comfortable with open-source solutions who need customizable metrics and integration with existing monitoring setups.
6. Redgate SQL Monitor
Features: Focuses on SQL Server with real-time monitoring, deadlock tracking, and query analysis.
Pros: Easy to set up with pre-built dashboards and alerts, optimized for SQL Server environments.
Use Case: SQL Server-focused organizations needing a specialized tool for monitoring and query optimization.
7. Percona Monitoring and Management (PMM)
Features: Designed for MySQL, PostgreSQL, and MongoDB, with advanced query analytics, deadlock detection, and performance tuning.
Pros: Open-source with a focus on database health, performance insights, and query tuning.
Use Case: Excellent for MySQL and PostgreSQL environments needing deep database-specific insights.
8. pgAdmin (for PostgreSQL)
Features: Includes a dashboard for monitoring PostgreSQL performance, deadlock analysis, and query tuning.
Pros: Free and specifically built for PostgreSQL with support for slow query analysis and performance monitoring.
Use Case: Ideal for PostgreSQL users who need a free, database-specific monitoring tool.
Each of these tools has its strengths and is suited for different use cases and environments. For a multi-database environment, tools like Datadog, New Relic, or SolarWinds are powerful options with broad support. For open-source and SQL Server-specific needs, Prometheus with Grafana, SSMS, or Redgate SQL Monitor can provide focused, detailed insights.