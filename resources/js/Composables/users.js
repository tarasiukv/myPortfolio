import axios from "axios";
import {ref} from "vue";

export default function useUsers()
{
    const users = ref([]);
    const getUsers = async () => {
        try {
            console.log("GetUsers")
            const {data} = await axios.get('/api/users')

            console.log("good")

            users.value = data
            console.log(users.value)
            return true
        } catch (err) {
            console.log('error')
            return false
        }
    }

    return {
        getUsers,
        users
    };
}
