import { DotsHorizontalIcon, SearchIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";


const contacts = [
    { src: "https://i.ibb.co/jbR06r3/rsz-dad.jpg", name: "Dad" },
    { src: "https://i.ibb.co/XDgXXs6/rsz-mom.jpg", name: "Mom" },
    { src: "https://edunext2-storage-cf.edunexttechnologies.com/1567754370628_sak_lkg.jpg", name: "Bro" },
    { src: "https://links.papareact.com/f0p", name: "Jeff Bezoz" },
    { src: "https://links.papareact.com/kxk", name: "Elon Musk" },
    { src: "https://links.papareact.com/zvy", name: "Bill Gates" },
    { src: "https://links.papareact.com/snf", name: "Mark Zuckerberg" },

    
];


function Widgets(){
    return(
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5 ">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>

            {contacts.map(contact => (
                <Contact key={contact.src} src={contact.src} name={contact.name} />
            ) )}
        </div>
    );
}

export default Widgets;