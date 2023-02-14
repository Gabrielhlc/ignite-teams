import { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { Container } from './styles'

// type RootParamList = {
//     groups: undefined;
//     new: undefined;
//     players: {
//         group: string;
//     }
// }

// type Props = {
//     navigation: NativeStackNavigationProp<RootParamList, 'groups'>;
// }
// export function Groups({navigation}:Props){
export function Groups() {
    const [groups, setGroups] = useState<string[]>([])

    const navigation = useNavigation();

    function handleNewGroup() {
        navigation.navigate('new');
    }

    return (
        <Container>
            <Header />
            <Highlight
                title='Turmas'
                subtitle='jogue com a sua turma'
            />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard title={item}
                    />
                )}
                contentContainerStyle={{ flex: 1 }}
                ListEmptyComponent={() => (
                    <ListEmpty message='Que tal cadastrar a primeira turma?' />
                )}
            />

            <Button
                title='Criar nova turma'
                onPress={handleNewGroup}
            />
        </Container>
    );
}
