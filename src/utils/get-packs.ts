import packJson from '../mocks/packs.json';
import Pack, { PackData } from '../models/pack';

const data: { [k: string]: PackData } = packJson.data;

const getPacks = (): Pack[] => {
    return Object.keys(data).map((key: string) => {
        const packData: PackData = data[key];

        return new Pack(packData);
    });
};

export default getPacks;
