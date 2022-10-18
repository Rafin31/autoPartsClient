
import { useEffect, useState } from "react"
import { authenticatedApiClient } from "../Services/AuthHttp";

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);


    useEffect(() => {
        const email = user?.email;
        if (email) {
            authenticatedApiClient.get(`/users/${email}`).then(
                data => {
                    if (data.data.Data[0].role === "admin") {
                        setAdmin(true)
                        setAdminLoading(false)
                    } else {
                        setAdmin(false)
                        setAdminLoading(false)
                    }
                }
            )
        }
    }, [user])



    return [admin, adminLoading]
}

export default useAdmin;