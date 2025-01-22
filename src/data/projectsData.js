import food from '../assets/svg/projects/p1.png'
import emp from '../assets/svg/projects/EMP.png'
import air from '../assets/svg/projects/Nike.png'
import down from '../assets/svg/projects/Wallpaper Downloder.png'
import car from '../assets/svg/projects/robot car.jpg'

export const projectsData = [
    {
        id: 1,
        projectName: 'Food Delivary App',
        projectDesc: 'This image showcases a UI/UX design concept for a food delivery app called "FoodNinja," created using Figma. The design features a sleek and modern interface with dark mode styling, including a homepage, menu, food categories, and user profiles. Vibrant colors and intuitive layouts aim to enhance user interaction and ensure seamless navigation.',
        tags: ['Figma'],
        //code: 'https://github.com/sreerag-rajan/historythroughmovies',
        //demo: 'https://historythroughmovies.pythonanywhere.com/',
        image: food
    },
    {
        id: 2,
        projectName: 'Employee Management System',
        projectDesc: 'This image depicts the user interface of an Employee Management System (EMS) built using C# with Windows Forms and SQL Server Express LocalDB for data storage. The dashboard displays real-time statistics, including the total number of employees, active employees, and inactive employees. Key navigation options, such as "Dashboard," "Add Employee," and "Salary," are organized in a sidebar for efficient access.',
        tags: ['C#', 'SQL Server Express LocalDB'],
        //code: 'https://github.com/sreerag-rajan/sportsjam-clone',
        //demo: 'https://practical-meninsky-36f305.netlify.app/',
        image: emp
    },
    {
        id: 3,
        projectName: 'Arduino Bluetooth Robot Car with Remote Control.',
        projectDesc: 'This project utilizes an Arduino Uno programmed in the Arduino language, incorporating sensors, servo motors, DC 3-6V gear motors, and Bluetooth control. The Bluetooth module (e.g., HC-05) allows wireless communication with a smartphone app, enabling the control of the robotic car. The DC gear motors provide movement, while the servo motor and sensors enhance functionality, such as obstacle detection or direction control.',
        tags: ['Arduino'],
        //code: 'https://github.com/sreerag-rajan/educative-clone',
        //demo: 'https://educative-clone.vercel.app/',
        image: car
    },
    {
        id: 4,
        projectName: 'Mobile Wallpaper Downloader WebSite',
        projectDesc: 'This image illustrates a responsive "Wallpaper Download Gallery" webpage built using HTML, CSS, and JavaScript. The gallery showcases a collection of visually appealing wallpapers organized in a grid layout. HTML structures the content, CSS provides the design and styling, and JavaScript can enhance interactivity, such as dynamic image loading or download functionality.',
        tags: ['HTML', 'JavaScript', 'CSS'],
        //code: 'https://github.com/sreerag-rajan/Reliance-Digital-Clone-U4-',
        //demo: 'https://reliance-digital-clone.herokuapp.com/',
        image: down
    },
    {
        id: 5,
        projectName: 'Nike Air Force Shoes Webpage',
        projectDesc: 'This website is a modern and interactive product landing page for showcasing Nike products. It features a visually appealing design with a focus on a specific product (e.g., Nike Air Force shoes). The page includes a navigation bar, a hero section highlighting the product, and additional details like free shipping, return policies, gift cards, and contact information.',
        tags: ['HTML', 'CSS', 'Javascript'],
        //code: 'https://github.com/iamrituyadav/Reliance_digital',
        //demo: 'https://reliance-digital-clone.herokuapp.com/',
        image: air
    },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/