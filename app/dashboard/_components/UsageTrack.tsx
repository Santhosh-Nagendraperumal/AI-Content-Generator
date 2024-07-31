'use client'
import React, { useEffect } from 'react'
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import {eq} from 'drizzle-orm'




function UsageTrack() {

    const {user}=useUser();

    // useEffect(()=>{
    //     user&&GetData();
    // },[user])
    // const GetData=async()=>{
    //     const result:HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress));
    //     GetTotalUsage(result);

    // }

    const GetTotalUsage=(result:any[])=>{  
        let total:number=0;
        result.forEach(element => {
            total=total+Number(element.aiResponse?.length)
        });
        console.log(total);

    }
  return (
    <div className='m-5'>
        <div className='bg-primary text-white p-3 rounded-lg'>
            <h2 className='font-medium mt-2'>Credits</h2>
            <div className='h-2 mb-4 bg-[#9981f9] w-full rounded-full mt-3'>
                <div className='h-2 bg-white rounded-full'
                    style={{
                        width:'35%'

                    }}

                ></div>
                <h2 className='text-sm flex justify-between'>350/10,000 credit used</h2>

            </div>
        </div>
    </div>
  )
}

export default UsageTrack