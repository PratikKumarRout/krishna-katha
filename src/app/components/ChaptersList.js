"use client"
import styles from "./ChaptersList.module.css";

const chapters = [
    { id: 1, name: 'ଅଧ୍ୟାୟ: ଅର୍ଜୁନ ବିଷାଦ ଯୋଗ' },
    { id: 2, name: 'ଅଧ୍ୟାୟ: ସାଂଖ୍ୟ ଯୋଗ' },
    { id: 3, name: 'ଅଧ୍ୟାୟ: କର୍ମ ଯୋଗ' },
    { id: 4, name: 'ଅଧ୍ୟାୟ: ଜ୍ଞାନ କର୍ମ ସନ୍ନ୍ୟାସ ଯୋଗ' },
    { id: 5, name: 'ଅଧ୍ୟାୟ: କର୍ମ ସନ୍ନ୍ୟାସ ଯୋଗ' },
    { id: 6, name: 'ଅଧ୍ୟାୟ: ଧ୍ୟାନ ଯୋଗ' },
    { id: 7, name: 'ଅଧ୍ୟାୟ: ଜ୍ଞାନ ବିଜ୍ଞାନ ଯୋଗ' },
    { id: 8, name: 'ଅଧ୍ୟାୟ: ଅକ୍ଷର ବ୍ରହ୍ମ ଯୋଗ' },
    { id: 9, name: 'ଅଧ୍ୟାୟ: ରାଜବିଦ୍ୟା ରାଜଗୁହ୍ୟ ଯୋଗ' },
    { id: 10, name: 'ଅଧ୍ୟାୟ: ବିଭୂତି ଯୋଗ' },
    { id: 11, name: 'ଅଧ୍ୟାୟ: ବିଶ୍ୱରୂପ ଦର୍ଶନ ଯୋଗ' },
    { id: 12, name: 'ଅଧ୍ୟାୟ: ଭକ୍ତି ଯୋଗ' },
    { id: 13, name: 'ଅଧ୍ୟାୟ: କ୍ଷେତ୍ର କ୍ଷେତ୍ରଜ୍ଞ ବିଭାଗ ଯୋଗ' },
    { id: 14, name: 'ଅଧ୍ୟାୟ: ଗୁଣତ୍ରୟ ବିଭାଗ ଯୋଗ' },
    { id: 15, name: 'ଅଧ୍ୟାୟ: ପୁରୁଷୋତ୍ତମ ଯୋଗ' },
    { id: 16, name: 'ଅଧ୍ୟାୟ: ଦୈବାସୁର ସମ୍ପଦ ବିଭାଗ ଯୋଗ' },
    { id: 17, name: 'ଅଧ୍ୟାୟ: ଶ୍ରଦ୍ଧାତ୍ରୟ ବିଭାଗ ଯୋଗ' },
    { id: 18, name: 'ଅଧ୍ୟାୟ: ମୋକ୍ଷ ସନ୍ନ୍ୟାସ ଯୋଗ' },
];

export default function ChaptersList({ onChapterSelect }) {
    return (
        <section className={styles.chaptersListContainer}>
            {chapters.map((chapter) => (
                <button
                key={chapter.id}
                className={styles.chapterButton}
                onClick={() => onChapterSelect(chapter.id)}>
                    {chapter.name}
                </button>
            ))}
        </section>
    );
}

