import { useSQLiteContext } from "expo-sqlite";

export type BoxCoinCreate = {
    name: string,
    amount: number
}

export function useBoxcoinDatabase(){
    const database = useSQLiteContext()
    
    async function create(data: BoxCoinCreate){
        const conn = await database.prepareAsync(
            "INSERT INTO targets (name, amount) VALUE ($name, $amount)"
        )
        await conn.executeAsync({
            $name: data.name,
            $amount: data.amount
        })
        
    }
    return(
        create
    )
}