import React from 'react';
import ReactDom from 'react-dom';

class home extends React.Components{
 render(){
   return (
     <div>
     <h1>Hello world</h1>
     </div>
   );
 }
}

ReactDom.render(<Home>,document.getElementById('root'));
