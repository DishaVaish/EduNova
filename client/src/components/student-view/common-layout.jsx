import StudentViewCommonHeader from "./header";
import { Outlet } from "react-router-dom";
function StudentViewCommonLayout(){
    return (
        <div>
            <StudentViewCommonHeader/>
            <Outlet/>
        </div>
     );
}
export default StudentViewCommonLayout;