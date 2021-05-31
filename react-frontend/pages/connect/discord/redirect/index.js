import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import AuthContext from '../../../../context/AuthContext'

function index() {

    const { loginUser } = useContext(AuthContext)
    const router = useRouter()

    console.log('user id: ', router.query.id)

    useEffect(() => {
        const id = router.query.id
        if (id) {
            loginUser(router.query.id)
            router.push('/')
        }
    }, [router.query.id])

    return (
        <div>
            
        </div>
    )
}

export default index