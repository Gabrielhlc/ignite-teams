import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { Loading } from '@components/Loading';

import { groupsGetAll } from '@storage/group/groupsGetAll';

import { Container } from './styles'

// without useNavigation:
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
    const [isLoading, setIsLoading] = useState(true);
    const [groups, setGroups] = useState<string[]>([])

    const navigation = useNavigation();

    function handleNewGroup() {
        navigation.navigate('new');
    }

    async function fetchGroups() {
        try {
            setIsLoading(true);

            const data = await groupsGetAll();
            setGroups(data);

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    function handleOpenGroup(group: string) {
        navigation.navigate('players', { group });
    }

    useFocusEffect(useCallback(() => {
        fetchGroups();
    }, []));

    return (
        <Container>
            <Header />
            <Highlight
                title='Turmas'
                subtitle='jogue com a sua turma'
            />
            {
                isLoading ? <Loading /> :

                    <FlatList
                        data={groups}
                        keyExtractor={item => item}
                        renderItem={({ item }) => (
                            <GroupCard
                                title={item}
                                onPress={() => handleOpenGroup(item)}
                            />
                        )}
                        contentContainerStyle={{ flex: 1 }}
                        ListEmptyComponent={() => (
                            <ListEmpty message='Que tal cadastrar a primeira turma?' />
                        )}
                    />
            }

            <Button
                title='Criar nova turma'
                onPress={handleNewGroup}
            />
        </Container>
    );
}
