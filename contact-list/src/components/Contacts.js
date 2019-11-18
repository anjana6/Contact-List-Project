import React from 'react';
import Contact from './Contact';

class Contacts extends React.Component{
    state = {contacts: [
        {
            id:1,
            name: 'Anjana',
            email: 'amjama@gmail.com',
            phone: '222-333-2541'
        },
        {
            id:2,
            name: 'Anjana',
            email: 'amjama@gmail.com',
            phone: '222-333-2541'
        }
    ]}
    render(){
        const {contacts} = this.state;
        return(
            <div>
                {contacts.map(contact => <Contact key={contact.id} name={contact.name} email={contact.email} phone={contact.phone}/>)}
            </div>

        );
    }
}

// const Contacts = () =>{
//     const [state,setState] = useState( contacts:[{}])
//     return(
//         <div>

//         </div>
//     );
// };

export default Contacts;