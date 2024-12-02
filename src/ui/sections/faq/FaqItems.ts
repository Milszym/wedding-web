export const faqItems: FaqItem[] = [
    {
        title: 'Gdzie będzie miała miejsce ceremonia ślubu?',
        description: 'Ceremonia będzie tuz obok sali Sopockiej na trawie :)'
    } as FaqItem,
    {
        title: 'O której jest ceremonia?',
        description: 'O 16:30, zachęcamy do przyjścia chwilę wcześniej.'
    } as FaqItem,
]

export interface FaqItem {
    title: string
    description: string
}