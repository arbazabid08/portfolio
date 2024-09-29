import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Network Scanner',
       /* description: "",*/
        tools: ['Ping','NetCat','ARP','DNS',"BASH"],
        role: 'Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Railway Station Management',
        description: '',
        tools: ['Python','Jupyter','Sublime'],
        role: 'Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'UCP RIDE',
        description: '',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB',  'Google MAPS API',],
        code: '',
        role: 'Backend Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Airport Mangement System',
        description: '',
        tools: ['MYSQL','XAMPP','MySQL Workbench'],
        code: '',
        role: 'Database Developer',
        demo: '',
        image: realEstate,
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },