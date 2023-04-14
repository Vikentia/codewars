class FileNameExtractor {
    static extractFileName(dirtyFileName) {
        return dirtyFileName.replace(/[0-9]+_/, '').replace(/\.\w+$/, '');
    }
}

console.log(FileNameExtractor.extractFileName("123_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34"));//"FILE_NAME.EXTENSION"