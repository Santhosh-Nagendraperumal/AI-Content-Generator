'use client'
import React from 'react'
import FormSection from './_components/FormSection'
import OutputSection from './_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState } from 'react' 
// import AiModel from '@/utils/AiModel';
import { chatSession } from '@/utils/AiModel'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment' 





interface PROPS{
    params:{
        'template-slug':string
        

    }
    
}

function CreateNewContent(props:PROPS) {
    const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);
    const [loading,setLoading]=useState(false);
    const {user}= useUser();
    const [aiOutput,setAiOutput]=useState<string>('');
    const GenerateAIContent=async(formData:any)=>{
        setLoading(true);
        const SelectedPrompt = selectedTemplate?.aiPrompt;
        const FinalAIPrompt = JSON.stringify(formData)+''+SelectedPrompt;
        const result =await chatSession.sendMessage(FinalAIPrompt);
        // console.log(result.response.text());
        setAiOutput(result?.response.text());
        await SaveInDb(formData,selectedTemplate?.slug|| '',result?.response.text());
        setLoading(false);

    }
    
    const SaveInDb = async (formData: string, slug: string, aiResp: string) => {
        try {
            const createdBy = user?.primaryEmailAddress?.emailAddress || '';
            await db.insert(AIOutput).values({
                formData: formData,
                templateSlug: slug,
                aiResponse: aiResp,
                createdBy: createdBy,
                createdAt: moment().format('DD/MM/yyyy')
            });
        } catch (error) {
            console.error('Error inserting data:', error);
        }
    }
  return (
    <div >
        <Link href={'/dashboard'}>
              <Button className='ml-5 mt-5'><ArrowLeft/> Back</Button>
        </Link>

    
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-5 py-5'>
         <FormSection selectedTemplate={selectedTemplate}
         userFormInput={(v:any)=>GenerateAIContent(v)}loading={loading}/>
         <div className='col-span-2'>
         <OutputSection aiOutput={aiOutput}/>
         </div>
    </div>
    </div>
  )
}

export default CreateNewContent