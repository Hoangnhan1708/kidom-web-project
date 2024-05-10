import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchItem from '~/components/SearchItem';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
            setSearchResult([searchValue + '1', searchValue + '2', searchValue + '3']);
        }
        if (searchValue === '') {
            setSearchResult([]);
        }
    };
    const handleHideResult = (e) => {
        setShowResult(false);
    };
    return (
        <Tippy
            visible={showResult && searchResult.length > 0}
            interactive={true}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {searchResult.map((result) => {
                            return <SearchItem data={result}></SearchItem>;
                        })}

                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    onChange={handleChange}
                    className={cx('search-input')}
                    type="text"
                    placeholder="Tìm kiếm sản phẩm"
                    onFocus={() => setShowResult(true)}
                ></input>
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
