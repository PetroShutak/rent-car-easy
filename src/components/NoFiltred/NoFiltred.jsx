import noResultsFound from '../../images/backgrounds/No_results_found.jpg';
import { Container, Text } from './NoFiltred.styled';


export const NoFiltred = () => {
    return (
        <Container>
            <img src={noResultsFound} alt="No results found" width="400" />
            <Text>Sorry, there are no results. <br/>Try to search something else</Text>
        </Container>
    )
};