'use client'
import Card from '@/app/components/card';
import { NewCard } from '@/app/components/newcard';

const contact = ()=>{
    const nombre='jose'
    const person={
        name:'juan',
        apellido:'perez',
        age:20,
        sexo:'m'
    }
    return (
        <div>Page Contact
            <Card name='juan'>
                <p>Ejemplo de vista</p>
            </Card>
            
            <Card name='pedro' />
            
            <Card name='lucas' />
            
            <Card name={nombre} />

            <hr/>
            <NewCard {...person} />
        </div>
    );
}
export default contact;