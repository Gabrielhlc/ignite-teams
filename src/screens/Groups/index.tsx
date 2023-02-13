import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

import { Container } from './styles'
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Groups() {
    const [groups, setGroups] = useState<string[]>([])


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

            <Button title='Criar nova turma' type='SUCCESS' />
        </Container>
    );
}
