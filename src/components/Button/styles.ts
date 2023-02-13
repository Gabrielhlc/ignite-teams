import { TouchableOpacity } from 'react-native'
import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'SUCCESS' | 'DANGER';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme, type }) => type === 'SUCCESS' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
    
    border-radius: 6px;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;