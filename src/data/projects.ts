let PLACEHOLDER = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThe8vy1axz9uuWirx3U1FHqlkmjOQETUQF9cVet0JbW6S7euudlGqP9Dg&s=10";

interface image {
    src: string;
    alt: string;
}


export interface Project {
    name: string;
    description: string;
    repo?: string;
    tags: string[];
    image: image;
}





export const projects = [

    {
        name: "Mnemosyne",
        description: "This very portfolio site",
        repo: "https://github.com/PeaterPita/Mnemosyne",
        tags: [],
        image: {
            src: PLACEHOLDER,
            alt: "PLACEHOLDER"
        }
    },




    {
        name: "Testing",
        description: "Hello world this is a description",
        repo: "https://peaterpita.com",
        tags: ["Rust"],
        image: {
            src: PLACEHOLDER,
            alt: "PLACEHOLDER",
        }
    },

];
