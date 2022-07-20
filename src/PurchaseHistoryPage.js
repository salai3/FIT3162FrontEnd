import { Container } from "@mui/system";
import PurchaseHistoryTable from "./Components/PurchaseHistoryTable";


const PurchaseHistoryPage = () => {
  return (
    <Container fluid sx={{padding: "50px"}}>
        <PurchaseHistoryTable/>
    </Container>
  );
};

export default PurchaseHistoryPage;
