
function StudentHomePage(){
   const {resetCredentials} = useContext(AuthContext)
    function handleLogout() {
        resetCredentials();
        sessionStorage.clear();
      }

    return<div>Home page

        <Button onClick={handleLogout}>Logout</Button>
    </div>;
}

export default StudentHomePage;