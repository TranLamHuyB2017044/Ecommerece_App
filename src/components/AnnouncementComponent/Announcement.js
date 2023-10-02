function Announcement() {
    return (
        <div style={{position:'absoute', zIndex: '100', width:'100%'}}>
                <p style={{
                backgroundColor: 'teal',
                textAlign: 'center',
                color: 'white',
                height:'30',
                fontSize:'14px',
                padding: '8px',
                fontWeight:'400',
            }}
            >
            Complimentary no rush shipping for U.S. orders over $95. Shop Now.
            </p>
        </div>
    );
}

export default Announcement;