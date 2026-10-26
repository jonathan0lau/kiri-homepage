import {getClubCatalog} from "@/lib/club";
export const dynamic="force-dynamic";
export async function GET() {
 const {data,available}=await getClubCatalog();
 return Response.json(data.works,{status:available?200:503,headers:{"Cache-Control":"no-store"}});
}
