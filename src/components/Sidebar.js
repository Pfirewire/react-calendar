import Link from './Link';
import className from 'classnames';

function Sidebar({ ...rest }) {
    const links = [
        { label: 'Month', path: '/' },
        { label: 'Week', path: '/week' },
        { label: 'Day', path: '/day' },
    ];

    const classes = className(
        rest.className,
        'sticky top-0 overflow-y-scroll flex flex-col items-center'
    )

    const renderedLinks = links.map((link) => {
        return (
            <Link
                key={link.label}
                to={link.path}
                className='mb-3'
                activeClassName='font-bold border-l-4 border-blue-500 pl-2'
            >
                {link.label}
            </Link>
        );
    })

    return(
        <div className={classes}>
            {renderedLinks}
        </div>
    );
}

export default Sidebar;