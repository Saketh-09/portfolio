const name = {
  beehyv: "BeeHyv Software Solutions",
  newage: "New Age IT",
  utd: "University of Texas at Dallas",
  beehyv2: "BeeHyv Software Solutions",
};
const location = {
  beehyv: "Hyderabad",
  newage: "Mumbai",
  utd: "Richardson",
  beehyv2: "Dallas",
};
const role = {
  beehyv: "Software Developer",
  newage: "Automation Engineer",
  utd: "CS outreach instructor",
  beehyv2: "Software Developer Intern",
};
const dates = {
  beehyv: "July 2022 – July 2023",
  newage: "September 2021 – June 2022",
  utd: "December 2023 – April 2024",
  beehyv2: "May 2024 – Present",
};
const projects = {
  beehyv: {
    "": [
      "Built the ingestion module utilizing FastAPI to import large volumes of raw data in various formats from ERP systems and perform data preprocessing, making the data suitable for training models. Achieved a remarkable 95% reduction in processing time by implementing asynchronous batch insertions.",
      "Defined and implemented data models using SQLAlchemy as ORM and Alembic for migrations, tailoring schemas for demand supply forecasting, inventory metrics, and analytics along with managing PostgreSQL.",
      "Managed deployments, services, configuration of data pipelines by developing Kubernetes manifests,Helm charts.",
    ],
  },
  newage: {
    "": [
      "Significantly improved workflow efficiency by configuring and managing Jenkins pipelines streamlining the software testing workflow through automation. ",
      "Achieved software reliability by developing comprehensive set of Python test scripts, rigorously validating various functionalities, including multi-source integrations and scalability, achieving software robustness.",
      "Developed SQL query suites, assessing operator performance, memory utilization, and spillage occurrences, thus evaluating the software's efficiency.",
    ],
  },
  utd: {
    "": [
      "Conducted hands on Java programming workshops to students with class sizes averaging 15 to" +
        " reinforce understanding of object oriented programming principles and problem solving techniques.",
    ],
  },
  beehyv2: {
    "": [
      "Genie (RAG-based LLM Platform):",
      "Developed chains using LangChain for a RAG based platform with configurable LLM abstraction for switching between multiple large language models like OpenAI GPT-4.",
      "Built connectors for Google Drive and SharePoint to enable multi-source ingestion of various file types, utilizing Airflow, along with chunking and embedding, and integrated PostgreSQL with pgvector for semantic search and retrieval.",
      "Integrated LangFuse for monitoring LangChain pipelines, evaluating model performance across different configurations.",
      "Implemented Role-Based Access Control for multi-tenancy using Keycloak, integrated ClickHouse for event logging, and embedded Superset dashboards in ReactJS for visualizing ClickHouse data.",
      "Tenxer Labs (Cloud-Based IC Evaluation Platform):",
      "Developed the cloud controller and storage layers of a robust data pipeline using FastAPI, Kafka, gRPC and Time series PostgreSQL for cloud-based IC evaluation, processing real time data from remote labs providing accelerated IC adoption.",
      "Transitioned inter service communication from WebSockets to gRPC following rigorous benchmark study achieving a 60% improvement in latency and throughput.",
      "Created ReactJS components using TypeScript, React Query, Zustand to display real time data visualization of IC evaluation results via WebSockets, utilizing compressed binary data reducing refresh latency by 2 times.",
    ],
  },
};

export { name, location, role, dates, projects };
