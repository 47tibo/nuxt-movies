// @ts-ignore
import {CardProps} from '@/components/Card/Card.vue'
import Card from '@/components/Card/Card.vue'

test('should get all required properties', () => {
    const Component = Card as any
    const emptyCardProps: Partial<CardProps> = {}
    const invalidCardProps: Partial<CardProps> = {
        title: 'Fight Club',
        vote_average: 8.4,
        overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.'
    }
    const validCardProps: CardProps = {
        title: 'Fight Club',
        release_date: '1999-10-15',
        poster_url: 'https://image.tmdb.org/t/p/w780/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
        imdb_url: 'https://www.imdb.com/title/tt0137523/',
        vote_average: 8.4,
        overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.'
    }

    expect(Component.props.cardProps.validator(emptyCardProps)).toBe(false)
    expect(Component.props.cardProps.validator(invalidCardProps)).toBe(false)
    expect(Component.props.cardProps.validator(validCardProps)).toBe(true)
})
