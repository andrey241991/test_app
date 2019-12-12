import React, { Component } from 'react';
import './style.css';
import OfficeItem from '../OfficeItem';

const offices = [

];

class OfficeList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                {offices.map(item => {
                    return <OfficeItem
                            adress={item.adress}
                            phone={item.phone}
                            email={item.email}
                            fax={item.fax}
                        />
                })}
            </div>
        );
    }
}

export default OfficeList;


// {
//     id: '0',
//     adress: ['Thames Valley Park', 'Reading',
//         'Berkshire, England RG6 1WG', 'United Kingdom'
//     ],
//     phone: '+ 1(425) 882 - 8080',
//     email: 'msft@microsoft.com',
//     fax: '+44 (0)87 0602 0100'
// },
// {
//     id: '1',
//     adress: ['Thames Valley Park', 'Reading',
//         'Berkshire, England RG6 1WG', 'United Kingdom'
//     ],
//     phone: '+ 1(425) 882 - 8080',
// },
// {
//     id: '2',
//     adress: ['Thames Valley Park', 'Reading',
//         'Berkshire, England RG6 1WG', 'United Kingdom'
//     ],
//     phone: '+ 1(425) 882 - 8080',
//     email: 'msft@microsoft.com',
// }