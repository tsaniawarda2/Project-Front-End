import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: #F25E74;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 500;
`;

const Announcement = () => {
    return <Container>Super Deal! Gratis Ongkir untuk Total Pembelian di Atas Rp. 200000</Container>;
};

export default Announcement;
