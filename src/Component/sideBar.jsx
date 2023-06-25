

function Sidebar() {
    return (
    
        <>
            <p className="logo">LODGN</p>
            <p className="list-1">Current request</p>
            <hr  className="divider-1" />
            <p className="list-2">Ongoing stays</p>
            <hr variant="middle"  className="divider-2"/>
            <p className="list-3">Previous stays</p>
            <hr variant="middle"  className="divider-3"/>
            <p className="list-4">Reports</p>
            <hr variant="middle"  className="divider-4"/>
            <button className="logout">Log-Out</button>
            <p className="help-desk">Help-Desk</p>
            <p className="help-desk-no">786-874 9988</p>

        </>
    );
  }
  
  export default Sidebar;