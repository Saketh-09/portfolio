const name = {beehyv: 'BeeHyv Software Solutions', newage: 'New Age IT', utd: 'University of Texas at Dallas',beehyv2: 'BeeHyv Software Solutions'};
const location = {beehyv: 'Hyderabad', newage: 'Mumbai', utd: 'Richardson', beehyv2: 'Dallas'};
const role = {beehyv: 'Software Developer', newage: 'Automation Engineer', utd: 'CS outreach instructor', beehyv2: 'Software Developer Intern'};
const dates ={beehyv: 'July 2022 – July 2023', newage: 'September 2021 – June 2022', utd:'December 2023 – April 2024',beehyv2: 'May 2024 – Present'};
const projects =
    {
        beehyv: {
            '': [
                'Built the ingestion module utilizing FastAPI to import large volumes of raw data in various formats from ERP systems'+
                'and perform data preprocessing, making the data suitable for training models. Achieved a remarkable 95% reduction'+
                'in processing time by implementing asynchronous batch insertions.',
                'Implemented XGBoost and ARIMA models to predict sales & operations metrics using AWS SageMaker, finding'+
                'optimal sets of hyper-parameters, achieving significant improvement in performance metrics.',
                'Defined and implemented data models using SQLAlchemy as ORM and Alembic for migrations, tailoring schemas for'+
                'demand supply forecasting, inventory metrics, and analytics along with managing PostgreSQL on AWS RDS.'
            ]
        },
        newage: {
            '': [
                'Significantly improved workflow efficiency by configuring and managing Jenkins pipelines streamlining the software testing workflow through automation. ',
                'Achieved software reliability by developing comprehensive set of Python test scripts, rigorously validating various functionalities, including multi-source integrations and scalability, achieving software robustness.',
                'Developed SQL query suites, assessing operator performance, memory utilization, and spillage occurrences, thus evaluating the software\'s efficiency.'
            ]
        },
        utd: {
            '': [
                'Conducted hands on Java programming workshops to high school students with class sizes averaging 15 students to'+
                'reinforce understanding of object oriented programming principles and problem solving techniques.'
            ]
        },
        beehyv2: {
            '': [' Developed the cloud controller and storage layers of a robust data pipeline using FastAPI, Kafka, gRPC and Time series'+
            'PostgreSQL for cloud-based IC evaluation, processing real time data from remote labs providing accelerated IC adoption.',
            'Transitioned inter service communication from WebSockets to gRPC following rigorous benchmark study achieving a'+
            '60% improvement in latency and throughput.',
            'Created ReactJS components using TypeScript to display real time data visualization of IC evaluation results via'+
            'WebSockets, utilizing compressed binary data reducing refresh latency by 2 times.',
            'Managed deployments, services, and configuration of data pipelines by developing Kubernetes manifests and Helm'+
            'charts. Automated deployment processes for Kubernetes clusters using CI/CD pipelines with Jenkins on Amazon EKS.']
        }
    };


export {name, location, role, dates, projects}
