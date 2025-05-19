import React from 'react';

const VisitorCounter = () => {
    return (
        <div style={{ width: '140px', textAlign: 'center', fontFamily: 'Arial, sans-serif', margin: '10px auto' }}>
            <h3 className='text-gray-400 mt-10  font-semibold' style={{ marginBottom: '8px', color: '#333' }}>Our Visitors</h3>
            <a >
                <img
                    src="https://hitwebcounter.com/counter/counter.php?page=20708083&style=0014&nbdigits=5&type=page&initCount=10"
                    title="Counter Widget"
                    alt="Visit counter For Websites"
                    border="0"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </a>
        </div>
    );
};

export default VisitorCounter;
