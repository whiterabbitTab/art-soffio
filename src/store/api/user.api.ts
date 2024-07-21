import { firestore } from "@/config/firebase.config";
import { IUser } from "@/types/user.type";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { doc, getDoc } from "firebase/firestore";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    getUserById: builder.query<IUser, string>({
      async queryFn(id: string) {
        try {
          const ref = doc(firestore, 'users', id)
          const docShap = await getDoc(ref)
          let user: IUser = { ...docShap.data() } as IUser
          return { data: user }
        } catch(error: any) {
          console.error(`Ошибка в API ДАУН ${error.message}`)
          return { error: error.message }
        }
      }
    }),
    // createUserById: builder.mutation({

    // })
  })
})

export const { useGetUserByIdQuery } = userApi