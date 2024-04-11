import { Eric } from "Midland.tx";
import { phd } from "UniversityOfChicago";

export function introduction {
    Eric.resumeUrl = 'assets/resume.pdf';
    Eric.education = (phd, 'Ancient Near Eastern Languages and Civilizations')
    Eric.setLanguage('english-us');  // 'aramaic', 'koine-greek', 'ancient-hebrew'
    Eric.greeting = 'Welcome to my portfolio! I am a software developer, educator, and philosopher.';    
    
    const instructions = {
        userInterface: 'This is a functional page-viewing interface just like a real code editor.',
        whatToDo: 'Have a look around at the various pages. You can open and close them at-will.'
        madeWith: 'This site was made with Angular 17 and Typescript.'
    };
    
    Eric.buildProfile(Eric.greeting, resumeUrl, Eric.education);
}