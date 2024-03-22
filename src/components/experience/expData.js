const name = {beehyv: 'BeeHyv Software Solutions', newage: 'New Age IT'};
const location = {beehyv: 'Hyderabad', newage: 'Mumbai'};
const role = {beehyv: 'Software Developer', newage: 'Automation Engineer'};
const dates ={beehyv: 'July 2022 – July 2023', newage: 'September 2021 – June 2022'};
const projects =
    {
        beehyv: {
            Egenio: [
                'Developed the backend of the application using the FastAPI framework, aimed at forecasting demand, supply, and inventory metrics using ML models, providing valuable insights to sales and operations customers, reducing their workload by 80%.',
                'Developed the ingestion module encompassing demand, supply, and inventory data from ERP systems, which imports huge volumes of data and performs data cleansing and transformation. Achieved a remarkable 95% reduction in processing time.',
                'Developed various reusable UI components using ReactJS including Filters, Tables, Authentication, Modals etc along\n' +
                'with features like sorting, pagination, searching and ensured seamless integration with backend APIs.',
                'Implemented a scalable microservices architecture integrating Apache Kafka as a messaging queue for seamless\n' +
                'communication between microservices utilizing Keycloak for authentication.',
                'Defined and implemented data models for the project utilizing PostgreSQL on AWS RDS, tailoring schemas for demand and supply forecasting, inventory metrics, and analytics.',
                'Accomplished the management and utilization of XGBoost model results, incorporating around 90% of dataset leveraged for constructing graphical elements and tabular representations, seamlessly showcasing forecasts across diverse hierarchies within the UI.'
            ],
//            Dremio: [
//                'Significantly improved workflow efficiency by configuring and managing Jenkins pipelines streamlining the software testing workflow through automation.',
//                'Achieved software reliability by developing comprehensive set of Python test scripts, rigorously validating various functionalities, including multi-source integrations and scalability, achieving software robustness.',
//                'Developed SQL query suites, assessing operator performance, memory utilization, and spillage occurrences, thus elevating the software\'s efficiency.'
//            ],
            Organo: [
                'Led the team in development of the application using Django framework aimed at generating organic farming plans.',
                'Leveraged the OpenCV Python module to proficiently process field images, identifying fields, computing their areas, and segmenting them into beds.',
                'Developed an intuitive UI utilizing reactJS that allowed ground-level users to smoothly interact with and manage tasks, resulting in a 50% reduction in user training time.'
            ]
        },
        newage: {
            '': [
                'Significantly improved workflow efficiency by configuring and managing Jenkins pipelines streamlining the software testing workflow through automation. ',
                'Achieved software reliability by developing comprehensive set of Python test scripts, rigorously validating various functionalities, including multi-source integrations and scalability, achieving software robustness.',
                'Developed SQL query suites, assessing operator performance, memory utilization, and spillage occurrences, thus evaluating the software\'s efficiency.'
            ]
        }
    };


export {name, location, role, dates, projects}
