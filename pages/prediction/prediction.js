import { useRouter } from "next/router"
import Layout from "../../components/layouts";

export default function PredictionScreen() {
  const router = useRouter();
  const props = router.query;
  return (
    <Layout>
      <span>TAKE: {props.title}</span>
      <div>
        <span>DETAILS: {props.body}</span>
      </div>
      <div>
        <span>STATUS: {props.status}</span>
      </div>
      <div>
        <span>RESULT: {props.correct}</span>
      </div>
      <div>
        <span>LINK:<a target='_blank' href={`https://${props.link}`}> {props.link}</a></span>
      </div>
    </Layout>
  )
}