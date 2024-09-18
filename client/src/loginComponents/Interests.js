import React, { useState, useEffect  } from 'react';
import { Container } from "react-bootstrap";
import Multiselect from 'multiselect-react-dropdown';

function Selectmultidropdown()
{

const [options, setOptions] =useState(['Option 1', 'Option 2','Test 3']);

const [country, setCountry]= useState([]);



    return(<React.Fragment>
         <Container className="content">
        <div className="row">
          <div className="col-sm-12">
         <h3 className='mt-3'>Select Multi Dropdown Checkbox in React js</h3>

         <form className="row g-3" method='post'>

             <div className="col-md-5">
                <label  className="form-label"> </label>
            
                    <div className="text-dark"> 
                      <Multiselect 
                      isObject={false}
                      onRemove={(event)=>{  console.log(event)} }
                      onSelect={ (event)=>{ console.log(event) }}
                      options={ country }                

                      showCheckbox
                      />      
                      
                    </div>
                    </div>

        </form>
        </div>
        </div>
        </Container>
       
    </React.Fragment>);
}

export default Selectmultidropdown;