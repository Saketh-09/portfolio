const name = {beehyv: 'BeeHyv Software Solutions', newage: 'New Age IT'};
const location = {beehyv: 'Hyderabad', newage: 'Mumbai'};
const role = {beehyv: 'Software Developer', newage: 'Automation Engineer'};
const dates ={beehyv: 'July 2022 – July 2023', newage: 'September 2021 – June 2022'};
const projects =
    {
        beehyv: {
            Egenio: [
                'Developed backend of the application using FastAPI framework which aims at forecasting demand, inventory metrics using ML models, providing valuable insights, and reducing 80% workload to sales & operations customers.',
                'Imported and processed intricate data of millions of rows encompassing demand, supply, and inventory from ERP systems achieving a remarkable 95% reduction in processing time, ensuring seamless integration.',
                'Accomplished the management and utilization of XGBoost model results, encompassing almost 90% of'+'dataset leveraged for constructing graphical elements and tabular representations, seamlessly showcasing forecasts across diverse hierarchies within the UI.'
            ],
            Dremio: [
                'Significantly improved workflow efficiency by configuring and managing Jenkins pipelines streamlining the software testing workflow through automation.',
                'Achieved software reliability by developing comprehensive set of Python test scripts, rigorously validating various functionalities, including multi-source integrations and scalability, achieving software robustness.',
                'Developed SQL query suites, assessing operator performance, memory utilization, and spillage occurrences, thus elevating the software\'s efficiency.'
            ],
            Organo: [
                'Led a team in development of the application using Django framework aimed at generating organic farming plans.',
                'Leveraged the OpenCV Python module to proficiently process field images, identifying fields, computing their areas, and segmenting them into beds.',
                'Designed an intuitive interface that allowed ground-level users to seamlessly interact with and manage tasks, resulting in a 50% reduction in user training time.'
            ]
        },
        newage: {
            Edelweiss: [
                'Led the automation testing and quality assurance team at Edelweiss for their digital lending platform.',
                'Utilized Selenium with Python and Appium to automate web and mobile app testing effectively.',
                'Reduced product roll out time by 40% by streamlining the quality assurance process and increasing efficiency.'
            ]
        }
    };


export {name, location, role, dates, projects}
