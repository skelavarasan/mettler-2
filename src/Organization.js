// import React, { useState, useEffect } from 'react';
// import Sidebar from './sidebar';
// import { useLocation } from 'react-router-dom';

// import './Organization.css';

// function Organization() {
//   const location = useLocation();
//   const orgId = new URLSearchParams(location.search).get('orgId');
//   const [organizationInfo, setOrganizationInfo] = useState(null);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [editedOrganizationInfo, setEditedOrganizationInfo] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     addressLine1: '',
//     addressLine2: '',
//     city: '',
//     state: '',
//     country: '',
//   });
//   useEffect(() => {
//     const fetchOrganizationInfo = async () => {
//       try {
//         const orgId = new URLSearchParams(location.search).get('orgId');
  
//         if (!orgId) {
//           console.error('Organization ID not provided in the URL parameters');
//           return;
//         }
  
//         const response = await fetch(`http://47.32.254.89:7000/api/org/getById/${orgId}`);
//         const data = await response.json();
  
//         if (response.ok) {
//           setOrganizationInfo(data.data);
//           setEditedOrganizationInfo({
//             name: data.data.organizationdetails[0].name,
//             email: data.data.email,
//             contact: data.data.mobileNumber,
//             addressLine1: data.data.contact[0].addressLine1,
//             addressLine2: data.data.contact[0].addressLine2,
//             city: data.data.contact[0].city,
//             state: data.data.contact[0].state,
//             country: data.data.contact[0].country,
//           });
//         } else {
//           console.error('Error fetching organization info:', data.message);
//         }
//       } catch (error) {
//         console.error('Error fetching organization info:', error);
//       }
//     };
  
//     fetchOrganizationInfo();
//   }, [location.search]);
  

//   const handleReset = () => {
//     setOrganizationInfo(null);
//     setEditedOrganizationInfo({
//       name: '',
//       email: '',
//       contact: '',
//       addressLine1: '',
//       addressLine2: '',
//       city: '',
//       state: '',
//       country: '',
//     });
//   };

//   const handleEdit = () => {
//     setIsEditMode(!isEditMode);
//   };

//   const handleSave = () => {
//     console.log('Save button clicked with edited data:', editedOrganizationInfo);
//     setOrganizationInfo((prevOrganizationInfo) => ({
//       ...prevOrganizationInfo,
//       organizationdetails: [
//         {
//           ...prevOrganizationInfo.organizationdetails[0],
//           name: editedOrganizationInfo.name,
//         },
//       ],
//       email: editedOrganizationInfo.email,
//       mobileNumber: editedOrganizationInfo.contact,
//       contact: [
//         {
//           ...prevOrganizationInfo.contact[0],
//           addressLine1: editedOrganizationInfo.addressLine1,
//           addressLine2: editedOrganizationInfo.addressLine2,
//           city: editedOrganizationInfo.city,
//           state: editedOrganizationInfo.state,
//           country: editedOrganizationInfo.country,
//         },
//       ],
//     }));
//     setIsEditMode(false);
//   };

//   const handleChange = (field, value) => {
//     setEditedOrganizationInfo((prevInfo) => ({
//       ...prevInfo,
//       [field]: value,
//     }));
//   };

//   const handleCancel = () => {
//     setEditedOrganizationInfo({
//       name: organizationInfo.organizationdetails[0].name,
//       email: organizationInfo.email,
//       contact: organizationInfo.mobileNumber,
//       addressLine1: organizationInfo.contact[0].addressLine1,
//       addressLine2: organizationInfo.contact[0].addressLine2,
//       city: organizationInfo.contact[0].city,
//       state: organizationInfo.contact[0].state,
//       country: organizationInfo.contact[0].country,
//     });
//     setIsEditMode(false);
//   };


//   return (
//     <div className="organization-container bg-gray-100 min-h-screen flex">
//       <Sidebar />
//       <div className="organization-content p-8 flex-1">
//         {organizationInfo ? (
//           <div className="max-w-2xl mx-auto">
//             <h1 className="text-3xl font-bold mb-4">{`Welcome to ${organizationInfo.organizationdetails[0].name}!`}</h1>
//             {isEditMode ? (
//               <div className="bg-white rounded shadow p-6 mb-4">
//                 <div className="input-box mb-4">

//                   <input
//                     type="text"
//                     id="organizationName"
//                     className="rounded p-2 w-full"
//                     placeholder="Organization-Name"
//                     value={editedOrganizationInfo.name}
//                     onChange={(e) => handleChange('name', e.target.value)}
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   {/* <label htmlFor="email">Email:</label> */}
//                   <input
//                     type="text"
//                     id="email"
//                     className="rounded p-2 w-full"
//                     placeholder="E-mail"
//                     value={editedOrganizationInfo.email}
//                     onChange={(e) => handleChange('email', e.target.value)}
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   {/* <label htmlFor="contact">Contact:</label> */}
//                   <input
//                     type="text"
//                     id="contact"
//                     className="rounded p-2 w-full"
//                     placeholder="Contact"
//                     value={editedOrganizationInfo.contact}
//                     onChange={(e) => handleChange('contact', e.target.value)}
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   {/* <label htmlFor="addressLine1">Address Line 1:</label> */}
//                   <input
//                     type="text"
//                     id="addressLine1"
//                     className="rounded p-2 w-full"
//                     placeholder="Address Line 1"
//                     value={editedOrganizationInfo.addressLine1}
//                     onChange={(e) => handleChange('addressLine1', e.target.value)}
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   {/* <label htmlFor="addressLine2">Address Line 2:</label> */}
//                   <input
//                     type="text"
//                     id="addressLine2"
//                     className="rounded p-2 w-full"
//                     placeholder="Address Line 2"
//                     value={editedOrganizationInfo.addressLine2}
//                     onChange={(e) => handleChange('addressLine2', e.target.value)}
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   {/* <label htmlFor="city">City:</label> */}
//                   <input
//                     type="text"
//                     id="city"
//                     className="rounded p-2 w-full"
//                     placeholder='City'
//                     value={editedOrganizationInfo.city}
//                     onChange={(e) => handleChange('city', e.target.value)}
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   {/* <label htmlFor="state">State:</label> */}
//                   <input
//                     type="text"
//                     id="state"
//                     className="rounded p-2 w-full"
//                     placeholder="State"
//                     value={editedOrganizationInfo.state}
//                     onChange={(e) => handleChange('state', e.target.value)}
//                   />
//                 </div>
//                 <div className="input-box mb-1">
//                   {/* <label htmlFor="country">Country:</label> */}
//                   <input
//                     type="text"
//                     id="country"
//                     className="rounded p-2 w-full"
//                     placeholder="Country"
//                     value={editedOrganizationInfo.country}
//                     onChange={(e) => handleChange('country', e.target.value)}
//                   />
//                 </div>
//               </div>
//             ) : (
//               <div className="bg-white rounded shadow p-6 mb-4">
//                 <div className="input-box mb-4">
//                   <input
//                     type="text"
//                     className="rounded p-2 w-full"
//                     placeholder={organizationInfo.organizationdetails[0].name}
//                     readOnly
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   <input
//                     type="text"
//                     className="rounded p-2 w-full"
//                     placeholder={organizationInfo.email}
//                     readOnly
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   <input
//                     type="text"
//                     className="rounded p-2 w-full"
//                     placeholder={organizationInfo.mobileNumber}
//                     readOnly
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   <input
//                     type="text"
//                     className="rounded p-2 w-full"
//                     placeholder={organizationInfo.contact[0].addressLine1}
//                     readOnly
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   <input
//                     type="text"
//                     className="rounded p-2 w-full"
//                     placeholder={organizationInfo.contact[0].addressLine2}
//                     readOnly
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   <input
//                     type="text"
//                     className="rounded p-2 w-full"
//                     placeholder={organizationInfo.contact[0].city}
//                     readOnly
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   <input
//                     type="text"
//                     className="rounded p-2 w-full"
//                     placeholder={organizationInfo.contact[0].state}
//                     readOnly
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   <input
//                     type="text"
//                     className="rounded p-2 w-full"
//                     placeholder={organizationInfo.contact[0].country}
//                     readOnly
//                   />
//                 </div>
//               </div>
//             )}
//             <div className="flex justify-between">
//               {isEditMode ? (
//                 <>
//                   <button onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 rounded">
//                     Cancel
//                   </button>
//                   <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
//                     Save
//                   </button>
//                 </>
//               ) : (
//                 <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded">
//                   Update
//                 </button>
//               )}
//             </div>
//           </div>
//         ) : (
//           <p>Loading organization information...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Organization;





























import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import { useLocation } from 'react-router-dom';

import './Organization.css';

function Organization() {
  const location = useLocation();
  const orgId = new URLSearchParams(location.search).get('orgId');
  const [organizationInfo, setOrganizationInfo] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedOrganizationInfo, setEditedOrganizationInfo] = useState({
    name: '',
    email: '',
    contact: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
  });
  useEffect(() => {
    const fetchOrganizationInfo = async () => {
      try {
        const orgId = new URLSearchParams(location.search).get('orgId');
  
        if (!orgId) {
          console.error('Organization ID not provided in the URL parameters');
          return;
        }
  
        const response = await fetch(`http://47.32.254.89:7000/api/org/getById/${orgId}`);
        const data = await response.json();
  
        if (response.ok) {
          setOrganizationInfo(data.data);
          setEditedOrganizationInfo({
            name: data.data.organizationdetails[0].name,
            email: data.data.email,
            contact: data.data.mobileNumber,
            addressLine1: data.data.contact[0].addressLine1,
            addressLine2: data.data.contact[0].addressLine2,
            city: data.data.contact[0].city,
            state: data.data.contact[0].state,
            country: data.data.contact[0].country,
          });
        } else {
          console.error('Error fetching organization info:', data.message);
        }
      } catch (error) {
        console.error('Error fetching organization info:', error);
      }
    };
  
    fetchOrganizationInfo();
  }, [location.search]);
  

  const handleReset = () => {
    setOrganizationInfo(null);
    setEditedOrganizationInfo({
      name: '',
      email: '',
      contact: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      country: '',
    });
  };

  const InputBox = ({ id, placeholder, value, readOnly, onChange }) => (
  <div className="input-box mb-2 md:mb-4 md:w-1/3 lg:w-1/4">
    <input
      type="text"
      id={id}
      className="rounded p-1 md:p-2 w-full"
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
      onChange={(e) => onChange(id, e.target.value)}
    />
  </div>
);

  const handleEdit = () => {
    setIsEditMode(!isEditMode);
  };

  const handleSave = () => {
    console.log('Save button clicked with edited data:', editedOrganizationInfo);
    setOrganizationInfo((prevOrganizationInfo) => ({
      ...prevOrganizationInfo,
      organizationdetails: [
        {
          ...prevOrganizationInfo.organizationdetails[0],
          name: editedOrganizationInfo.name,
        },
      ],
      email: editedOrganizationInfo.email,
      mobileNumber: editedOrganizationInfo.contact,
      contact: [
        {
          ...prevOrganizationInfo.contact[0],
          addressLine1: editedOrganizationInfo.addressLine1,
          addressLine2: editedOrganizationInfo.addressLine2,
          city: editedOrganizationInfo.city,
          state: editedOrganizationInfo.state,
          country: editedOrganizationInfo.country,
        },
      ],
    }));
    setIsEditMode(false);
  };

  const handleChange = (field, value) => {
    setEditedOrganizationInfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  const handleCancel = () => {
    setEditedOrganizationInfo({
      name: organizationInfo.organizationdetails[0].name,
      email: organizationInfo.email,
      contact: organizationInfo.mobileNumber,
      addressLine1: organizationInfo.contact[0].addressLine1,
      addressLine2: organizationInfo.contact[0].addressLine2,
      city: organizationInfo.contact[0].city,
      state: organizationInfo.contact[0].state,
      country: organizationInfo.contact[0].country,
    });
    setIsEditMode(false);
  };


return (
  <div className="organization-container bg-gray-100 min-h-screen flex">
    <Sidebar />
    <div className="organization-content p-8 flex-1">
      {organizationInfo ? (
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{`Welcome to ${organizationInfo.organizationdetails[0].name}!`}</h1>

         

          {isEditMode ? (
            <div className="bg-white rounded shadow p-6 mb-4">
               <div className="mb-4">
              <div className="flex flex-wrap">
                <InputBox id="organizationName" placeholder="Organization Name" value={editedOrganizationInfo.name} readOnly={false} onChange={handleChange} />
                <InputBox id="email" placeholder="E-mail" value={editedOrganizationInfo.email} readOnly={false} onChange={handleChange} />
                <InputBox id="contact" placeholder="Contact" value={editedOrganizationInfo.contact} readOnly={false} onChange={handleChange} />
                {/* Repeat the pattern for other input boxes */}
              </div>

              <div className="flex flex-wrap">
                <InputBox id="city" placeholder="City" value={editedOrganizationInfo.city} readOnly={false} onChange={handleChange} />
                <InputBox id="email" placeholder="E-mail" value={editedOrganizationInfo.email} readOnly={false} onChange={handleChange} />
                <InputBox id="contact" placeholder="Contact" value={editedOrganizationInfo.contact} readOnly={false} onChange={handleChange} />
                {/* Repeat the pattern for other input boxes */}
              </div>

              <div className="flex flex-wrap">
                <InputBox id="addressLine1" placeholder="Address Line 1" value={editedOrganizationInfo.addressLine1} readOnly={false} onChange={handleChange} />
                <InputBox id="email" placeholder="E-mail" value={editedOrganizationInfo.email} readOnly={false} onChange={handleChange} />
                <InputBox id="contact" placeholder="Contact" value={editedOrganizationInfo.contact} readOnly={false} onChange={handleChange} />
              </div>

              </div>
            </div>
          ) : (
            <div className="bg-white rounded shadow p-6 mb-4">
              <div className="flex flex-wrap">
                <InputBox type='text' id="organizationName" placeholder={organizationInfo.organizationdetails[0].name} value={organizationInfo.organizationdetails[0].name} readOnly={true} onChange={() => {}} />
                <InputBox id="email" placeholder={organizationInfo.email} value={organizationInfo.email} readOnly={true} onChange={() => {}} />
                <InputBox id="contact" placeholder={organizationInfo.mobileNumber} value={organizationInfo.mobileNumber} readOnly={true} onChange={() => {}} />
                {/* Repeat the pattern for other input boxes */}
              </div>

              <div className="flex flex-wrap">
                <InputBox id="city" placeholder="City" value={editedOrganizationInfo.city} readOnly={true} onChange={handleChange} />
                <InputBox id="email" placeholder="E-mail" value={editedOrganizationInfo.email} readOnly={true} onChange={handleChange} />
                <InputBox id="contact" placeholder="Contact" value={editedOrganizationInfo.contact} readOnly={true} onChange={handleChange} />
                {/* Repeat the pattern for other input boxes */}
              </div>

              <div className="flex flex-wrap">
                <InputBox id="address" placeholder="Address Line 1" value={editedOrganizationInfo.addressLine1} readOnly={true} onChange={handleChange} />
                <InputBox id="email" placeholder="E-mail" value={editedOrganizationInfo.email} readOnly={true} onChange={handleChange} />
                <InputBox id="contact" placeholder="Contact" value={editedOrganizationInfo.contact} readOnly={true} onChange={handleChange} />
              </div>
            </div>
          )}

          <div className="flex justify-between">
            {isEditMode ? (
              <>
                <button onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 rounded">
                  back
                </button>
                <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
                  Save
                </button>
              </>
            ) : (
              <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded">
                Update
              </button>
            )}
          </div>
        </div>
      ) : (
        <p>Loading organization information...</p>
      )}
    </div>
  </div>
 );
}

export default Organization