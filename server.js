const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
const PORT = 9000

app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));

const presidents = {
    'washington': {
        'pimg': 'http://localhost:9000/images/George_Washington.jpg',
        'fullName': 'George Washington',
        'party': 'Independent',
        'birthLocation': 'Westmoreland County, Virginia',
        'dob': 'February 22, 1732',
        'died': 'December 14, 1799',
        'age': 67,
        'position': '1st President of the United States',
        'inOffice': 'April 30, 1789 - March 4, 1797',
        'vicePresident' :	'John Adams',
        'about': 'George Washington was an American Founding Father, military officer, politician and statesman who served as the first president of the United States from 1789 to 1797. Appointed by the Second Continental Congress as commander of the Continental Army in 1775, he led Patriot forces to victory in the American Revolutionary War and then served as president of the Constitutional Convention in 1787, which drafted and ratified the Constitution of the United States and established the U.S. federal government. Washington played an indispensable role in adopting and ratifying the Constitution, which replaced the Articles of Confederation in 1789. He was then twice elected president by the Electoral College unanimously. As the first U.S. president, he implemented a strong, well-financed national government while remaining impartial in a fierce rivalry that emerged between cabinet members Thomas Jefferson and Alexander Hamilton. During the French Revolution, he proclaimed a policy of neutrality while additionally sanctioning the Jay Treaty. He set enduring precedents for the office of president, including republicanism, a peaceful transfer of power, the use of the title "Mr. President", and the two-term tradition. His 1796 farewell address became a preeminent statement on republicanism in which he wrote about the importance of national unity and the dangers that regionalism, partisanship, and foreign influence pose to it. Washington has thus been known as the \'Father of the Nation\'. Washington\'s image is an icon of American culture. He has been memorialized by monuments, a federal holiday, various media depictions, geographical locations including the national capital, the State of Washington, stamps, and currency. In 1976, he was posthumously promoted to the rank of general of the Armies, the highest rank in the U.S. Army. He consistently ranks in both popular and scholarly polls as one of the greatest presidents in American history.'

    },
    'jadams': {
        'pimg': 'http://localhost:9000/images/John_Adams.jpg',
        'fullName': 'John Adams',
        'party': 'Federalist Party',
        'birthLocation': 'Braintree, Massachusetts',
        'dob': 'October 30, 1735',
        'died': 'July 4, 1826',
        'age': 90,
        'position': '2nd President of the United States',
        'inOffice': 'March 4, 1797 - March 3, 1801',
        'vicePresident' :	'Thomas Jefferson',
        'about': 'John Adams was an American statesman, attorney, diplomat, writer, and Founding Father who served as the second president of the United States. Before his presidency, he was a leader of the American Revolution that achieved independence from Great Britain. During the latter part of the Revolutionary War and in the early years of the new nation, he served the U.S. government as a senior diplomat in Europe. Adams was the first person to hold the office of vice president of the United States, serving from 1789 to 1797. He was a dedicated diarist and regularly corresponded with important contemporaries, including his wife and adviser Abigail Adams and his friend and political rival Thomas Jefferson. Adams was a Massachusetts delegate to the Continental Congress and became a leader of the revolution. He assisted Jefferson in drafting the Declaration of Independence in 1776 and was its primary advocate in Congress. As a diplomat he helped negotiate a peace treaty with Great Britain and secured vital governmental loans. Adams was the primary author of the Massachusetts Constitution in 1780, which influenced the United States Constitution, as did his essay Thoughts on Government.'

    },
    'jefferson': {
        'pimg': 'http://localhost:9000/images/Thomas_Jefferson.jpg',
        'fullName': 'Thomas Jefferson',
        'party': 'Democratic-Republican',
        'birthLocation': 'Shadwell, Virginia',
        'dob': 'April 13, 1743',
        'died': 'July 4, 1826',
        'age': 83,
        'position': '3rd President of the United States',
        'inOffice': 'March 4, 1801 - March 4, 1809',
        'vicePresident' :	'Aaron Burr & George Clinton',
        'about': 'Thomas Jefferson was an American statesman, diplomat, lawyer, architect, philosopher, and Founding Father who served as the third president of the United States. He was the primary author of the Declaration of Independence. Following the American Revolutionary War and prior to becoming president in 1801, he was the nation\'s first U.S. secretary of state under George Washington and then the nation\'s second vice president under John Adams. As president, Jefferson assertively defended the nation\'s shipping and trade interests against Barbary pirates and aggressive British trade policies. Beginning in 1803, he promoted a western expansionist policy with the Louisiana Purchase, which doubled the nation\'s geographic size. In his second presidential term, Jefferson was beset by difficulties at home, including the trial of his former vice president Aaron Burr. In 1807, Jefferson implemented the Embargo Act to defend the nation\'s industries from British threats to U.S. shipping, limiting foreign trade and stimulating the birth of the American manufacturing industry.'

    },
    'madison': {
        'pimg': 'http://localhost:9000/images/James_Madison.jpg',
        'fullName': 'James Madison',
        'party': 'Democratic-Republican',
        'birthLocation': 'Port Conway, Virginia',
        'dob': 'March 16, 1751',
        'died': 'June 28, 1836',
        'age': 85,
        'position': '4th President of the United States',
        'inOffice': 'March 4, 1809 - March 4, 1817',
        'vicePresident' :	'George Clinton & Elbridge Gerry',
        'about': 'James Madison Jr. was an American statesman, diplomat, and Founding Father who served as the fourth president of the United States. He was popularly acclaimed the "Father of the Constitution" for his pivotal role in drafting and promoting the Constitution of the United States and the Bill of Rights. During the early 1790s, he opposed the economic program and the accompanying centralization of power favored by Secretary of the Treasury Hamilton. Alongside Thomas Jefferson, he organized the Democratic–Republican Party in opposition to Hamilton\'s Federalist Party. After Jefferson was elected president in 1800, Madison served as his Secretary of State from 1801 to 1809 and supported Jefferson in the case of Marbury v. Madison. Motivated by desire to acquire land held by Britain, Spain, and Native Americans, and after diplomatic protests with a trade embargo failed to end British seizures of American shipped goods, Madison led the United States into the War of 1812. Although the war ended inconclusively, many Americans viewed the war\'s outcome as a successful "second war of independence" against Britain.'
    },
    'monroe': {
        'pimg': 'http://localhost:9000/images/James_Monroe.jpg',
        'fullName': 'James Monroe',
        'party': 'Democratic-Republican',
        'birthLocation': 'Monroe Hall, Virginia',
        'dob': 'April 28, 1758',
        'died': 'July 4, 1831',
        'age': 73,
        'position': '5th President of the United States',
        'inOffice': 'March 4, 1817 - March 4, 1825',
        'vicePresident' :	'Daniel D. Tompkins',
        'about': 'James Monroe was an American statesman, lawyer, diplomat, and Founding Father who served as the fifth president of the United States. He was the last Founding Father to serve as president as well as the last president of the Virginia dynasty and the Republican Generation. His presidency coincided with the Era of Good Feelings, concluding the First Party System era of American politics. He issued the Monroe Doctrine, a policy of limiting European colonialism in the Americas. Monroe previously served as governor of Virginia, a member of the United States Senate, U.S. ambassador to France and Britain, the seventh secretary of state, and the eighth secretary of war. During the American Revolutionary War, he served in the Continental Army. He studied law under Thomas Jefferson from 1780 to 1783 and subsequently served as a delegate to the Continental Congress as well as a delegate to the Virginia Ratifying Convention. He opposed the ratification of the United States Constitution. In 1790, he won election to the Senate where he became a leader of the Democratic-Republican Party.'
    },
    'jqadams': {
        'pimg': 'http://localhost:9000/images/John_Quincy_Adams.jpg',
        'fullName': 'John Quincy Adams',
        'party': 'Federalist (1792-1808), Democratic-Republican (1809 - 1828)',
        'birthLocation': 'Braintree, Massachusetts Bay',
        'dob': 'July 11, 1767',
        'died': 'February 23, 1848',
        'age': 80,
        'position': '6th President of the United States',
        'inOffice': 'September 22, 1817 - March 3, 1825',
        'vicePresident' :	'John C. Calhoun',
        'about': 'John Quincy Adams was an American statesman, politician, diplomat, lawyer, and diarist who served as the sixth president of the United States. He previously served as the eighth United States secretary of state from 1817 to 1825. During his long diplomatic and political career, he served as an ambassador and also as a member of the United States Congress representing Massachusetts in both chambers. He was the eldest son of John Adams, who served as the second president of the United States from 1797 to 1801, and First Lady Abigail Adams. Initially a Federalist like his father, he won election to the presidency as a member of the Democratic-Republican Party, and later, in the mid-1830s, became affiliated with the Whig Party. Multilingual, Adams held diplomatic posts for the duration of Madison\'s presidency, and he served as part of the American delegation that negotiated an end to the War of 1812. In 1817, President James Monroe selected Adams as his secretary of state. In that role, Adams negotiated the Adams–Onís Treaty, which provided for the American acquisition of Florida. He also helped formulate the Monroe Doctrine, which became a key tenet of U.S. foreign policy. In 1818, Adams was elected a member of the American Philosophical Society in Philadelphia.'
    },
    'jackson': {
        'pimg': 'http://localhost:9000/images/Andrew_jackson.jpg',
        'fullName': 'Andrew Jackson',
        'party': 'Democratic-Republican, Democratic',
        'birthLocation': 'Waxhaw Settlement between North Carolina and South Carolina',
        'dob': 'March 15, 1767',
        'died': 'June 8, 1845',
        'age': 78,
        'position': '7th President of the United States',
        'inOffice': 'March 4, 1829 - March 4, 1837',
        'vicePresident' :	'John C. Calhoun, Martin Van Buren',
        'about': 'Andrew Jackson Jr was an American lawyer, planter, general, and statesman who served as the seventh president of the United States. Before his presidency, he gained fame as a general in the U.S. Army and served in both houses of the U.S. Congress. Often praised as an advocate for ordinary Americans and for his work in preserving the union of states, Jackson has also been criticized for his racial policies, particularly his treatment of Native Americans. In the concurrent war against the British, Jackson\'s victory at the Battle of New Orleans in 1815 made him a national hero. He later commanded U.S. forces in the First Seminole War, which led to the annexation of Florida from Spain. He briefly served as Florida\'s first territorial governor before returning to the Senate. He ran for president in 1824. He won a plurality of the popular and electoral vote, but no candidate won the electoral majority. With the help of Henry Clay, the House of Representatives elected John Quincy Adams in a contingent election. Jackson\'s supporters alleged that there was a "corrupt bargain" between Adams and Clay and began creating their own political organization that would eventually become the Democratic Party.'
    },
    'vanburen': {
        'pimg': 'http://localhost:9000/images/Martin_Van_Buren.jpg',
        'fullName': 'Martin Van Buren',
        'party': 'Democratic-Republican, Democratic',
        'birthLocation': 'Kinderhook, New York',
        'dob': 'December 5, 1782',
        'died': 'July 24, 1862',
        'age': 79,
        'position': '8th President of the United States',
        'inOffice': 'March 4, 1837 – March 4, 1841',
        'vicePresident' :	'Richard Mentor Johnson',
        'about': 'Martin Van Buren was an American lawyer, diplomat, and statesman who served as the eighth president of the United States. A primary founder of the Democratic Party, he served as New York\'s attorney general and U.S. senator, then briefly as the ninth governor of New York before joining Andrew Jackson\'s administration as the tenth United States secretary of state, minister to Great Britain, and ultimately the eighth vice president when named Jackson\'s running mate for the 1832 election. Van Buren won the presidency in 1836 against divided Whig opponents, the first president of non-Anglo-Saxon heritage. He lost re-election in 1840, and failed to win the Democratic nomination in 1844. Later in his life, he emerged as an elder statesman and an important anti-slavery leader who led the Free Soil Party ticket in the 1848 presidential election. Most residents in Kinderhook, New York were of Dutch descent and spoke Dutch as their primary language; he is the only president to have spoken English as a second language. As the leader of the Bucktails faction, he emerged as the most influential politician from New York in the 1820s and established a political machine known as the Albany Regency.'
    },
    'wharrison': {
        'pimg': 'http://localhost:9000/images/William_Henry_Harrison.jpg',
        'fullName': 'William Henry Harrison',
        'party': 'Democratic-Republican, Whig',
        'birthLocation': 'Charles City County, Virginia, British America',
        'dob': 'February 9, 1773',
        'died': 'April 4, 1841',
        'age': 68,
        'position': '9th President of the United States',
        'inOffice': 'March 4, 1841 – April 4, 1841',
        'vicePresident' :	'John Tyler',
        'about': 'William Henry Harrison was an American military officer and politician who served as the ninth president of the United States. He died just 31 days after his inauguration as president in 1841, making his presidency the shortest in U.S. history. He was also the first U.S. president to die in office, causing a brief constitutional crisis since presidential succession was not then fully defined in the United States Constitution. He was the last president born as a British subject in the Thirteen Colonies and was the paternal grandfather of Benjamin Harrison, the 23rd president of the United States. Harrison was born into the Harrison family of Virginia at their homestead, Berkeley Plantation. He was a son of Benjamin Harrison V, a Founding Father of the United States. During his early military career, he participated in the 1794 Battle of Fallen Timbers, an American military victory that ended the Northwest Indian War. Later, he led a military force against Tecumseh\'s confederacy at the Battle of Tippecanoe in 1811, where he earned the nickname "Old Tippecanoe". He was promoted to major general in the Army during the War of 1812, and led American infantry and cavalry to victory at the Battle of the Thames in Upper Canada.'
    },
    'tyler': {
        'pimg': 'http://localhost:9000/images/John_Tyler.jpg',
        'fullName': 'John Tyler',
        'party': 'Whig, Democratic-Republican, Democratic, Tyler Party, Independent',
        'birthLocation': 'Greenway Plantation, Charles City County, Virginia, U.S.',
        'dob': 'March 29, 1790',
        'died': 'January 18, 1862',
        'age': 71,
        'position': '10th President of the United States',
        'inOffice': 'April 4, 1841 – March 4, 1845',
        'vicePresident' :	'None',
        'about': 'John Tyler was an American politician who served as the tenth president of the United States from 1841 to 1845, after briefly holding office as the tenth vice president in 1841. He was elected vice president on the 1840 Whig ticket with President William Henry Harrison, succeeding to the presidency following Harrison\'s death 31 days after assuming office. Tyler was a stalwart supporter and advocate of states\' rights, including regarding slavery, and he adopted nationalistic policies as president only when they did not infringe on the states\' powers. His unexpected rise to the presidency posed a threat to the presidential ambitions of Henry Clay and other Whig politicians and left Tyler estranged from both of the nation\'s major political parties at the time. Tyler became the first vice president to succeed to the presidency. Amid uncertainty as to whether a vice president succeeded a deceased president, or merely took on his duties, Tyler immediately took the presidential oath of office, setting a lasting precedent. He signed into law some of the Whig-controlled Congress\'s bills, but he was a strict constructionist and vetoed the party\'s bills to create a national bank and raise tariff rates. He believed that the president, rather than Congress, should set policy, and he sought to bypass the Whig establishment led by Senator Henry Clay. Most of Tyler\'s cabinet resigned shortly into his term and the Whigs expelled him from the party, dubbing him "His Accidency". Tyler was the first president to have his veto of legislation overridden by Congress.'
    },
    'polk': {
        'pimg': 'http://localhost:9000/images/James_Polk.jpg',
        'fullName': 'James Knox Polk',
        'party': 'Democratic-Republican, Democratic',
        'birthLocation': 'Pineville, North Carolina, U.S.',
        'dob': 'November 2, 1795',
        'died': 'June 15, 1849',
        'age': 53,
        'position': '11th President of the United States',
        'inOffice': 'March 4, 1845 – March 4, 1849',
        'vicePresident' :	'George M. Dallas',
        'about': 'James Knox Polk was the 11th president of the United States. He also served as the 13th speaker of the House of Representatives from 1835 to 1839 and the ninth governor of Tennessee from 1839 to 1841. A protégé of Andrew Jackson, he was a member of the Democratic Party and an advocate of Jacksonian democracy. He was known for extending the territory of the United States through the Mexican–American War during his presidency, annexing the Republic of Texas, the Oregon Territory, and the Mexican Cession after winning the Mexican–American War. Though he is relatively obscure today, scholars have ranked Polk favorably for his ability to promote and achieve the major items on his presidential agenda. He has also been criticized for leading the country into a war with Mexico that exacerbated sectional divides. A property owner who used slave labor, he kept a plantation in Mississippi and increased his slave ownership during his presidency. His policy of territorial expansion saw the nation reach the Pacific coast and almost all its contiguous borders. He made the U.S. a nation poised to become a world power, but with divisions between free and slave states gravely exacerbated, setting the stage for the Civil War.'
    },
    'taylor': {
        'pimg': 'http://localhost:9000/images/Zachary_Taylor.jpg',
        'fullName': 'Zachary Taylor',
        'party': 'Whig',
        'birthLocation': 'Barboursville, Virginia, U.S', 
        'dob': 'November 24, 1784',
        'died': 'July 9, 1850',
        'age': 65,
        'position': '12th President of the United States',
        'inOffice': 'March 4, 1849 - July 9, 1850',
        'vicePresident' : 'Millard Fillmore',
        'about': 'Zachary Taylor  was an American military leader who served as the 12th president of the United States from 1849 until his death in 1850. He was a career officer in the United States Army, rising to the rank of major general and becoming a national hero for his victories in the Mexican–American War. As a result, he won election to the White House despite his vague political beliefs. His top priority as president was to preserve the Union. He died 16 months into his term from a stomach disease. In 1845, during the annexation of Texas, President James K. Polk dispatched Taylor to the Rio Grande in anticipation of a battle with Mexico over the disputed Texas–Mexico border. The Mexican–American War broke out in April 1846, and Taylor defeated Mexican troops commanded by General Mariano Arista at the battles of Palo Alto and Resaca de la Palma, driving Arista\'s troops out of Texas. Taylor then led his troops into Mexico, where they defeated Mexican troops commanded by Pedro de Ampudia at the Battle of Monterrey. Defying orders, Taylor led his troops further south and, despite being severely outnumbered, dealt a crushing blow to Mexican forces under General Antonio López de Santa Anna at the Battle of Buena Vista. Taylor\'s troops were transferred to the command of Major General Winfield Scott, but Taylor retained his popularity.'
    },
    'fillmore': {
        'pimg': 'http://localhost:9000/images/Millard_Fillmore.jpg',
        'fullName': 'Millard Fillmore',
        'party': 'Whig',
        'birthLocation': 'Moravia, New York',
        'dob': 'January 7, 1800',
        'died': 'March 8, 1874',
        'age': 74,
        'position': '13th President of the United States',
        'inOffice': 'July 9, 1850 - March 4, 1853',
        'vicePresident' : 'None',
        'about': 'Millard Fillmore was an American statesman who served as the thirteenth president of the United States from 1850 to 1853. Fillmore became president following the death of Zachary Taylor. As the Whig Party broke up after his presidency, he and many in its conservative wing joined the Know Nothings and formed the American Party. Despite his party\'s emphasis on anti-immigration and anti-Catholic policies, during his 1856 candidacy, he said little about immigration, focusing on the preservation of the Union, and won only Maryland. During the American Civil War, he denounced secession and agreed that the Union must be maintained by force if necessary, but was critical of Abraham Lincoln\'s war policies. After peace was restored, he supported President Andrew Johnson\'s Reconstruction policies. He remained involved in civic interests in retirement, including as chancellor of the University of Buffalo, which he had helped found in 1846. Historians consistently rank him among the worst presidents in American history, largely for his policies regarding slavery, as well as among the least memorable. His association with the Know Nothings and support of Johnson\'s reconstruction policies further tarnished his reputation and legacy. As president, he faced the divisive issue of slavery, particularly with the passage of the Compromise of 1850. He supported compromise measures, including the Fugitive Slave Act, to maintain the fragile balance between free and slave states. His presidency was also associated with the opening of relations with Japan through the Perry Expedition.'
    },
    'pierce': {
        'pimg': 'http://localhost:9000/images/Franklin_Pierce.jpg',
        'fullName': 'Franklin Pierce',
        'party': 'Democratic',
        'birthLocation': 'Hillsborough, New Hampshire, U.S',
        'dob': 'November 23, 1804',
        'died': 'October 8, 1869',
        'age': 64,
        'position': '14th President of the United States',
        'inOffice': 'March 4, 1853 - March 4, 1857',
        'vicePresident' : 'William R. King (Mar–Apr. 1853). None (1853–1857)',
        'about': 'Franklin Pierce was an American statesman and politician who served as the fourteenth president of the United States from 1853 to 1857. A northern Democrat who believed that the abolitionist movement was a fundamental threat to the nation\'s unity, he alienated anti-slavery groups by signing the Kansas–Nebraska Act and enforcing the Fugitive Slave Act. Conflict between North and South continued after his presidency, and, after Abraham Lincoln was elected president in 1860, the Southern states seceded, resulting in the American Civil War. He faced challenges during his presidency, including the contentious issue of whether territories acquired in the Mexican-American War would allow slavery. His support for the Kansas-Nebraska Act, which allowed territories to decide the issue of slavery through popular sovereignty, led to increased sectional tensions and violence, notably in "Bleeding Kansas." His presidency was also marked by his commitment to territorial expansion and strengthening diplomatic ties with other nations.'
    },
    'buchanan': {
        'pimg': 'http://localhost:9000/images/James_Buchanan.jpg',
        'fullName': 'James Buchanan Jr.',
        'party': 'Federalist (1814–1824), Democratic-Republican (1824–1828), Democratic (from 1828)',
        'birthLocation': 'Cove Gap, Pennsylvania, U.S',
        'dob': 'April 23, 1791',
        'died': 'June 1, 1868',
        'age': 77,
        'position': '15th President of the United States',
        'inOffice': 'March 4, 1857 - March 4, 1861',
        'vicePresident' : 'John C. Breckinridge',
        'about': 'James Buchanan was an American statesman and politician who served as the fifteenth president of the United States from 1857 to 1861. He faced significant challenges during his presidency, including the escalating tensions between North and South over the issue of slavery. The Dred Scott decision by the Supreme Court, the Panic of 1857, and the growing secessionist movement in the South all contributed to the challenges he faced. His presidency is often criticized for its perceived failure to address the deepening divide between North and South, ultimately leading to the outbreak of the Civil War. He supported the ineffective Corwin Amendment in an effort to reconcile the country. He made an unsuccessful attempt to reinforce Fort Sumter, but otherwise refrained from preparing the military. In his personal life, he never married and was the only U.S. president to remain a lifelong bachelor, leading some historians and authors to question his sexual orientation. His failure to forestall the Civil War has been described as incompetence, and he spent his last years defending his reputation. Historians and scholars rank him as among the worst presidents in American history.'
    },
    'lincoln': {
        'pimg': 'http://localhost:9000/images/Abraham_Lincoln.jpg',
        'fullName': 'Abraham Lincoln',
        'party': 'Republican',
        'birthLocation': 'Sinking Spring Farm, Kentucky',
        'dob': 'February 12, 1809',
        'died': 'April 15, 1865',
        'age': 56,
        'position': '16th President of the United States',
        'inOffice': 'March 4, 1861 - April 15, 1865',
        'vicePresident' : 'Hannibal Hamlin (1861–1865), Andrew Johnson (Mar–Apr. 1865)',
        'about': 'Abraham Lincoln was an American statesman and politician who served as the sixteenth president of the United States from 1861 until his assassination in 1865. He led the nation through the Civil War, preserving the Union, ending slavery, strengthening the federal government, and modernizing the U.S economy. His leadership and eloquent speeches, including the Gettysburg Address and the Emancipation Proclamation, have made him one of the most revered figures in American history. His presidency is marked by his commitment to national unity and the principles of democracy. He managed his own successful re-election campaign. He sought to heal the war-torn nation through reconciliation. In 1863, he issued the Emancipation Proclamation, which declared the slaves in the states "in rebellion" to be free. It also directed the Army and Navy to "recognize and maintain the freedom of such persons", and to receive them "into the armed service of the United States." He pressured border states to outlaw slavery, and he promoted the Thirteenth Amendment to the U.S. Constitution, which abolished slavery, except as punishment for a crime. On April 14, 1865, just five days after the Confederate surrender at Appomattox, he was attending a play at Ford\'s Theatre in Washington, D.C., with his wife, Mary, when he was fatally shot by Confederate sympathizer John Wilkes Booth. He is remembered as a martyr and a national hero for his wartime leadership and for his efforts to preserve the Union and abolish slavery. He is often ranked in both popular and scholarly polls as the greatest president in American history.'
    },
    'ajohnson': {
        'pimg': 'http://localhost:9000/images/Andrew_Johnson.jpg',
        'fullName': 'Andrew Johnson',
        'party': 'Democratic (National Union)',
        'birthLocation': 'Raleigh, North Carolina, U.S',
        'dob': 'December 29, 1808',
        'died': 'July 31, 1875',
        'age': 66,
        'position': '17th President of the United States',
        'inOffice': 'April 15, 1865 - March 4, 1869',
        'vicePresident' : 'None',
        'about': 'Andrew Johnson was an American statesman who served as the seventeenth president of the United States from 1865 to 1869. He became president after the assassination of Abraham Lincoln. As president, he faced the challenges of Reconstruction following the Civil War. His approach to Reconstruction was lenient towards the Southern states, leading to conflict with the Radical Republicans in Congress. His presidency is marked by his impeachment by the House of Representatives. He was acquitted in the Senate by one vote. He implemented his own form of Presidential Reconstruction, a series of proclamations directing the seceded states to hold conventions and elections to reform their civil governments. Southern states returned many of their old leaders and passed Black Codes to deprive the freedmen of many civil liberties, but Congressional Republicans refused to seat legislators from those states and advanced legislation to overrule the Southern actions. He vetoed their bills, and Congressional Republicans overrode him, setting a pattern for the remainder of his presidency.He opposed the Fourteenth Amendment which gave citizenship to former slaves. In 1866, he went on an unprecedented national tour promoting his executive policies, seeking to break Republican opposition. His strong opposition to federally guaranteed rights for black Americans is widely criticized. Historians have consistently ranked him one of the worst presidents in American history.'
    },
    'grant': {
        'pimg': 'http://localhost:9000/images/Ulysses_S_Grant.jpg',
        'fullName': 'Ulysses S. Grant',
        'party': 'Republican',
        'birthLocation': 'Point Pleasant, Ohio',
        'dob': 'April 27, 1822',
        'died': 'July 23, 1885',
        'age': 63,
        'position': '18th President of the United States',
        'inOffice': 'March 4, 1869 - March 4, 1877',
        'vicePresident' : 'Schuyler Colfax (1869–1873), Henry Wilson (1873–1875), None (1875–1877)',
        'about': 'Ulysses S. Grant (born Hiram Ulysses Grant) was an American military leader and politician who served as the eighteenth president of the United States from 1869 to 1877. He is best known for his role as the commanding general of the Union Army during the Civil War, leading to the defeat of the Confederate Army. As president, he focused on Reconstruction policies and civil rights for African Americans, he was an effective civil rights executive who signed the bill that created the Justice Department and worked with Radical Republicans to protect African Americans during Reconstruction. He also sought to address corruption in government, though his administration faced challenges in this regard. His presidency is marked by his commitment to national unity and equal rights for all citizens. As president, he stabilized the post-war national economy, supported congressional Reconstruction and the ratification of the Fifteenth Amendment, and prosecuted the Ku Klux Klan. Under him, the Union was completely restored. He appointed African Americans and Jewish Americans to prominent federal offices. In 1871, he created the first Civil Service Commission, advancing the civil service more than any prior president. In 2022, he became the third person in U.S. history to be promoted to General of the Armies in celebration of the bicentennial of his birth. At the time of his death, he was the most popular American and was memorialized as a symbol of national unity. '
    },
    'hayes': {
        'pimg': 'http://localhost:9000/images/Rutherford_B_Hayes.jpg',
        'fullName': 'Rutherford Birchard Hayes',
        'party': 'Republican',
        'birthLocation': 'Delaware, Ohio',
        'dob': 'October 4, 1822',
        'died': 'January 17, 1893',
        'age': 70,
        'position': '19th President of the United States',
        'inOffice': 'March 4, 1877 - March 4, 1881',
        'vicePresident' : 'William A. Wheeler',
        'about': 'Rutherford B. Hayes was an American statesman who served as the nineteenth president of the United States from 1877 to 1881. He became president in a controversial election, where the Compromise of 1877 led to his selection as part of a political agreement. As president, he focused on civil service reform, attempting to reduce corruption in government appointments. He also pursued policies to reconcile the North and South after the Civil War, emphasizing economic development and education. His administration was influenced by his belief in meritocratic government and equal treatment without regard to wealth, social standing, or race. One of the defining events of his presidency was the Great Railroad Strike of 1877, which he resolved by calling in the US Army against the railroad workers. It remains the deadliest conflict between workers and strikebreakers in American history. As president, he implemented modest civil-service reforms that laid the groundwork for further reform in the 1880s and 1890s. He vetoed the Bland–Allison Act of 1878, which put silver money into circulation and raised nominal prices; he saw the maintenance of the gold standard as essential to economic recovery. His policy toward western Indians anticipated the assimilationist program of the Dawes Act of 1887. At the end of his term, Hayes kept his pledge not to run for reelection and retired to his home in Ohio. He became an advocate of social and educational reform.'
    },
    'garfield': {
        'pimg': 'http://localhost:9000/images/James_A_Garfield.jpg',
        'fullName': 'James Abram Garfield',
        'party': 'Republican',
        'birthLocation': 'Moreland Hills, Ohio',
        'dob': 'November 19, 1831',
        'died': 'September 19, 1881',
        'age': 49,
        'position': '20th President of the United States',
        'inOffice': 'March 4, 1881 - September 19, 1881',
        'vicePresident' : 'Chester A. Arthur',
        'about': 'James A. Garfield was an American statesman who served as the twentieth president of the United States from March 4, 1881, until his death on September 19, 1881. Garfield\'s presidency was cut short by his assassination, making his tenure one of the shortest in U.S. history.  A lawyer and Civil War general, he served nine terms in the United States House of Representatives and is the only sitting member of the House to be elected president. Before his candidacy for the presidency, he had been elected to the U.S. Senate by the Ohio General Assembly—a position he declined when he became president-elect. Before his presidency, he had a distinguished career as a Union general during the Civil War and as a member of the U.S. House of Representatives. His presidency focused on civil service reform and economic issues, but he did not have the opportunity to fully implement his agenda. His accomplishments as president included his assertion of presidential authority against senatorial courtesy in executive appointments, a purge of corruption in the Post Office, and his appointment of a Supreme Court justice. He advocated for agricultural technology, an educated electorate, and civil rights for African Americans. He also proposed substantial civil service reforms, which were passed by Congress in 1883 as the Pendleton Civil Service Reform Act and signed into law by his successor, Chester A. Arthur.'
    },
    'arthur': {
        'pimg': 'http://localhost:9000/images/Chester_A_Arthur.jpg',
        'fullName': 'Chester Alan Arthur',
        'party': 'Republican, Whig (before 1854)',
        'birthLocation': 'Fairfield, Vermont',
        'dob': 'October 5, 1829',
        'died': 'November 18, 1886',
        'age': 57,
        'position': '21st President of the United States',
        'inOffice': 'September 19, 1881 - March 4, 1885',
        'vicePresident' : 'None',
        'about': 'Chester A. Arthur was an American statesman who served as the twenty-first president of the United States from 1881 to 1885. He became president following the assassination of James A. Garfield. Before his presidency, he had a career in law and politics, serving as the Collector of the Port of New York. As president, he focused on civil service reform, signing the Pendleton Civil Service Reform Act into law. His presidency is also associated with efforts to modernize the U.S. Navy. As president, he presided over the rebirth of the U.S. Navy, but he was criticized for failing to alleviate the federal budget surplus which had been accumulating since the end of the Civil War. He vetoed the first version of the 1882 Chinese Exclusion Act, arguing that its twenty-year ban on Chinese immigrants to the United States violated the Burlingame Treaty, but he signed a second version, which included a ten-year ban. He appointed Horace Gray and Samuel Blatchford to the Supreme Court. He also enforced the Immigration Act of 1882 to impose more restrictions on immigrants and the Tariff of 1883 to attempt to reduce tariffs. He signed into law the Pendleton Civil Service Reform Act of 1883, which came as a surprise to reformers who held a negative reputation of Arthur as a Stalwart and product of Conkling\'s organization.'
    },
    'cleveland': {
        'pimg': 'http://localhost:9000/images/Grover_Cleveland.jpg',
        'fullName': 'Stephen Grover Cleveland',
        'party': 'Democratic',
        'birthLocation': 'Caldwell, New Jersey',
        'dob': 'March 18, 1837',
        'died': 'June 24, 1908',
        'age': 71,
        'position': '22nd & 24th President of the United States',
        'inOffice': 'March 4, 1885 - March 4, 1889 & March 4, 1893 – March 4, 1897',
        'vicePresident' : 'Thomas A. Hendricks (Mar–Nov. 1885), None (1885–1889), Adlai Stevenson I (March 4, 1893 – March 4, 1897)' ,
        'about': 'Grover Cleveland was an American statesman and politician who served as the twenty-second and twenty-fourth president of the United States, making him the only president to serve two non-consecutive terms. Before his presidency, he had a career as a lawyer and he served as a mayor and governor of New York state, winning fame as an anti-corruption crusader. He was the first Democrat to win the presidency after the Civil War, and was one of two Democrat presidents, followed by Woodrow Wilson in 1912, in an era when Republicans dominated the presidency between 1861 and 1933. His presidencies are marked by his commitment to fiscal responsibility, civil service reform, and opposition to protective tariffs. As his second administration began, the Panic of 1893 sparked a severe national depression. Many voters blamed the Democrats, opening the way for a Republican landslide in 1894 and for the agrarian and silverite seizure of the Democratic Party in 1896. The result was a political realignment that started the Fourth Party System and the Progressive Era. An anti-imperialist, he opposed the push to annex Hawaii, launched an investigation into the 1893 coup against the Hawaiian queen, and called for her to be restored; the House of Representatives adopted a resolution against annexation. He was a formidable policymaker, but also garnered criticism.'
    },
    'bharrison': {
        'pimg': 'http://localhost:9000/images/Benjamin_Harrison.jpg',
        'fullName': 'Benjamin Harrison',
        'party': 'Republican',
        'birthLocation': 'North Bend, Ohio',
        'dob': 'August 20, 1833',
        'died': 'March 13, 1901',
        'age': 67,
        'position': '23rd President of the United States',
        'inOffice': 'March 4, 1889 - March 4, 1893',
        'vicePresident' : 'Levi P. Morton',
        'about': 'Benjamin Harrison was an American statesman and politician who served as the twenty-third president of the United States. He was the grandson of President William Henry Harrison. Before his presidency, he had a career as a lawyer and military officer, gaining recognition for his service in the Union Army during the Civil War. His presidency is known for its focus on protective tariffs, veterans\' pensions, and the Sherman Antitrust Act. He also signed into law the Land Revision Act of 1891.  During his administration, six western states were admitted to the Union. In addition, he substantially strengthened and modernized the U.S. Navy and conducted an active foreign policy, but his proposals to secure federal education funding as well as voting rights enforcement for African Americans were unsuccessful. Due in large part to surplus revenues from the tariffs, federal spending reached one billion dollars for the first time during his term. In 1899 he represented Venezuela in its British Guiana boundary dispute with Great Britain. Many have praised Harrison\'s commitment to African Americans\' voting rights, and his work ethic and integrity, but scholars and historians generally rank him as an average President, due to the uneventful nature of his term.'
    },
    'mckinley': {
        'pimg': 'http://localhost:9000/images/William_McKinley.jpg',
        'fullName': 'William McKinley',
        'party': 'Republican',
        'birthLocation': 'Niles, Ohio',
        'dob': 'January 29, 1843',
        'died': 'September 14, 1901',
        'age': 58,
        'position': '25th President of the United States',
        'inOffice': 'March 4, 1897 - September 14, 1901',
        'vicePresident' : 'Garret Hobart (1897–1899), None (1899–1901), Theodore Roosevelt (Mar–Sep. 1901)',
        'about': 'William McKinley was an American statesman and politician who served as the twenty-fifth president of the United States from March 4, 1897, until his assassination on September 14, 1901. He led a realignment that made Republicans largely dominant in the industrial states and nationwide for decades. He presided over victory in the Spanish–American War of 1898; gained control of Hawaii, Puerto Rico, the Philippines and Cuba; restored prosperity after a deep depression; rejected the inflationary monetary policy of free silver, keeping the nation on the gold standard; and raised protective tariffs. His presidency saw the passage of the Gold Standard Act and the establishment of the Gold Standard, linking the value of the U.S. dollar to a specific quantity of gold. His 1890 McKinley Tariff was highly controversial and, together with a Democratic redistricting aimed at gerrymandering him out of office, led to his defeat in the Democratic landslide of 1890. He was elected governor of Ohio in 1891 and 1893, steering a moderate course between capital and labor interests. He secured the Republican nomination for president in 1896 amid a deep economic depression and defeated his Democratic rival William Jennings Bryan after a front porch campaign in which he advocated "sound money" (the gold standard unless altered by international agreement) and promised that high tariffs would restore prosperity.'
    },
    'troosevelt': {
        'pimg': 'http://localhost:9000/images/Theodore_Roosevelt.jpg',
        'fullName': 'Theodore Roosevelt Jr.',
        'party': 'Republican',
        'birthLocation': 'New York City, New York',
        'dob': 'October 27, 1858',
        'died': 'January 6, 1919',
        'age': 60,
        'position': '26th President of the United States',
        'inOffice': 'September 14, 1901 - March 4, 1909',
        'vicePresident' : 'None (First term), Charles W. Fairbanks (Second term)',
        'about': 'Theodore Roosevelt was an American statesman, politician, and conservationist who served as the twenty-sixth president of the United States. He became president following the assassination of William McKinley. His presidency is known for his progressive policies, including trust-busting, the regulation of big business, and the conservation of natural resources. He was a key figure in the Progressive Era, advocating for social and political reforms. He assumed the presidency at age 42, and remains the youngest person to become president of the United States. As a leader of the progressive movement, he championed his "Square Deal" domestic policies, which called for fairness for all citizens, breaking of bad trusts, regulation of railroads, and pure food and drugs. He prioritized conservation and established national parks, forests, and monuments to preserve the nation\'s natural resources. In foreign policy, he focused on Central America, where he began construction of the Panama Canal. He expanded the Navy and sent the Great White Fleet on a world tour to project American naval power. His successful efforts to broker the end of the Russo-Japanese War won him the 1906 Nobel Peace Prize, making him the first American to ever win a Nobel Prize. He was elected to a full term in 1904 and promoted policies more to the left, despite growing opposition from Republican leaders. During his presidency, he groomed his close ally William Howard Taft to succeed him in the 1908 presidential election.'
    },
    'taft': {
        'pimg': 'http://localhost:9000/images/William_Howard_Taft.jpg',
        'fullName': 'William Howard Taft',
        'party': 'Republican',
        'birthLocation': 'Cincinnati, Ohio',
        'dob': 'September 15, 1857',
        'died': 'March 8, 1930',
        'age': 72,
        'position': '27th President of the United States',
        'inOffice': 'March 4, 1909 - March 4, 1913',
        'vicePresident' : 'James S. Sherman (1909–1912), None (1912–1913)',
        'about': 'William Howard Taft was an American statesman and jurist who served as the was the 27th president of the United States, serving from 1909 to 1913, and the tenth chief justice of the United States, serving from 1921 to 1930, the only person to have held both offices. Before his presidency, Taft had a distinguished legal career and served as the governor-general of the Philippines. As president, he focused on trust-busting, tariff reform, and conservation policies. Taft faced challenges within his party, leading to a split in the Republican Party during the 1912 election. In the White House, he focused on East Asia more than European affairs and repeatedly intervened to prop up or remove Latin American governments. Taft sought reductions to trade tariffs, then a major source of governmental income, but the resulting bill was heavily influenced by special interests. His administration was filled with conflict between the Republican Party\'s conservative wing, with which Taft often sympathized, and its progressive wing, toward which Theodore Roosevelt moved more and more. Controversies over conservation and antitrust cases filed by the Taft administration served to further separate the two men. Roosevelt challenged Taft for renomination in 1912. Taft used his control of the party machinery to gain a bare majority of delegates and he bolted the party. The split left Taft with little chance of reelection, and he took only Utah and Vermont in Woodrow Wilson\'s victory.'
    },
    'wilson': {
        'pimg': 'http://localhost:9000/images/Woodrow_Wilson.jpg',
        'fullName': 'Thomas Woodrow Wilson',
        'party': 'Democratic',
        'birthLocation': 'Staunton, Virginia',
        'dob': 'December 28, 1856',
        'died': 'February 3, 1924',
        'age': 67,
        'position': '28th President of the United States',
        'inOffice': 'March 4, 1913 - March 4, 1921',
        'vicePresident' : 'Thomas R. Marshall',
        'about': 'Woodrow Wilson was an American statesman, academic, and writer who served as the twenty-eighth president of the United States. He led the nation through World War I and played a key role in the establishment of the League of Nations, advocating for a peaceful post-war order. His presidency also saw the passage of significant domestic reforms, including the Federal Reserve Act, the Federal Trade Commission Act, and the Clayton Antitrust Act. His efforts to promote the League of Nations faced challenges in the U.S. Senate. He served as governor of New Jersey from 1911 to 1913, during which he broke with party bosses and won the passage of several progressive reforms. To win the 1912 presidential nomination he mobilized progressives and Southerners to his cause at the 1912 Democratic National Convention. He defeated incumbent Republican William Howard Taft and third-party nominee Theodore Roosevelt to easily win the 1912 United States presidential election, becoming the first Southerner to do so since 1848.  During his first year as president, he authorized the widespread imposition of segregation inside the federal bureaucracy. He ousted many African Americans from federal posts and his opposition to women\'s suffrage drew protests. His first term was largely devoted to pursuing passage of his progressive New Freedom domestic agenda. He has been criticized for supporting racial segregation.'
    },
    'harding': {
        'pimg': 'http://localhost:9000/images/Warren_G_Harding.jpg',
        'fullName': 'Warren Gamaliel Harding',
        'party': 'Republican',
        'birthLocation': 'Blooming Grove, Ohio',
        'dob': 'November 2, 1865',
        'died': 'August 2, 1923',
        'age': 57,
        'position': '29th President of the United States',
        'inOffice': 'March 4, 1921 - August 2, 1923',
        'vicePresident' : 'Calvin Coolidge',
        'about': 'Warren G. Harding was an American statesman and newspaper publisher who served as the twenty-ninth president of the United States from 1921 until his death in 1923. He was one of the most popular sitting U.S. presidents. After his death, a number of scandals were exposed, including Teapot Dome, as well as an extramarital affair with Nan Britton, which tarnished his reputation. He advocated for a "return to normalcy" after the tumult of World War I. His presidency focused on economic policies and a reduction of government involvement in the economy. His administration faced controversies, including the Teapot Dome scandal, which involved improper leasing of federal oil reserves. He appointed a number of respected figures to his cabinet, including Andrew Mellon at Treasury, Herbert Hoover at Commerce, and Charles Evans Hughes at the State Department. A major foreign policy achievement came with the Washington Naval Conference of 1921–1922, in which the world\'s major naval powers agreed on a naval limitations program that lasted a decade. Harding released political prisoners who had been arrested for their opposition to World War I. In 1923, he died of a heart attack in San Francisco while on a western tour'
    },
    'coolidge': {
        'pimg': 'http://localhost:9000/images/Calvin_Coolidge.jpg',
        'fullName': 'John Calvin Coolidge Jr.',
        'party': 'Republican',
        'birthLocation': 'Plymouth Notch, Vermont',
        'dob': 'July 10, 1872',
        'died': 'January 5, 1933',
        'age': 60,
        'position': '30th President of the United States',
        'inOffice': 'August 2, 1923 - March 4, 1929',
        'vicePresident' : 'None (First term), Charles G. Dawes (Second term)',
        'about': 'Calvin Coolidge was an American statesman and lawyer who served as the thirtieth president of the United States. He became president following the death of Warren G. Harding. His presidency is known for its focus on limited government, economic prosperity, and conservative values. Coolidge\'s tenure saw significant tax cuts and a reduction in government spending. He chose not to seek re-election in 1928 remarking that ten years as president would be "longer than any other man has had it – too long! Throughout his gubernatorial career, Coolidge ran on the record of fiscal conservatism, strong support for women\'s suffrage, and a vague opposition to Prohibition. During his presidency, he restored public confidence in the White House after the many scandals of the Harding administration. He signed into law the Indian Citizenship Act of 1924, which granted U.S. citizenship to all Native Americans, and oversaw a period of rapid and expansive economic growth known as the "Roaring Twenties", leaving office with considerable popularity. He was known for his hands-off governing approach and pro-business stances; as biographer Claude Fuess wrote: "He embodied the spirit and hopes of the middle class, could interpret their longings and express their opinions. That he did represent the genius of the average is the most convincing proof of his strength. He gains nearly universal praise for his stalwart support of racial equality during a period of heightened racial tension in the United States'
    },
    'hoover': {
        'pimg': 'http://localhost:9000/images/Herbert_Hoover.jpg',
        'fullName': 'Herbert Clark Hoover',
        'party': 'Independent (before 1920), Republican (1920–1964)',
        'birthLocation': 'West Branch, Iowa',
        'dob': 'August 10, 1874',
        'died': 'October 20, 1964',
        'age': 90,
        'position': '31st President of the United States',
        'inOffice': 'March 4, 1929 - March 4, 1933',
        'vicePresident' : 'Charles Curtis',
        'about': 'Herbert Hoover was an American engineer, businessman, and politician who served as the thirty-first president of the United States from 1929 to 1933. He took office just before the onset of the Great Depression. His presidency faced the challenges of economic downturn and widespread unemployment. Hoover\'s administration implemented various measures to address the economic crisis, but his efforts were largely criticized. He served as the secretary of commerce under presidents Warren G. Harding and Calvin Coolidge. He was an unusually active and visible Cabinet member, becoming known as "Secretary of Commerce and Under-Secretary of all other departments." He was influential in the development of air travel and radio. He led the federal response to the Great Mississippi Flood of 1927. During his first year in office, the stock market crashed, signaling the onset of the Great Depression, which dominated his presidency. His response to the depression was widely seen as lackluster and he scapegoated Mexican Americans for the economic crisis. Approximately 1.5-2 million Mexican Americans were forcibly "repatriated" to Mexico in a forced migration campaign known as the Mexican Repatriation — a majority of them were born in the United States.'
    },
    'froosevelt': {
        'pimg': 'http://localhost:9000/images/Franklin_D_Roosevelt.jpg',
        'fullName': 'Franklin Delano Roosevelt',
        'party': 'Democratic',
        'birthLocation': 'Hyde Park, New York',
        'dob': 'January 30, 1882',
        'died': 'April 12, 1945',
        'age': 63,
        'position': '32nd President of the United States',
        'inOffice': 'March 4, 1933 - April 12, 1945',
        'vicePresident' : 'John N. Garner (First term), Henry A. Wallace (Second term), Harry S. Truman (Third term)',
        'about': 'Franklin D. Roosevelt was an American statesman and politician who served as the thirty-second president of the United States. He led the nation through the Great Depression and World War II, implementing the New Deal, a series of programs and policies aimed at economic recovery. He was the only president to be elected to four terms, serving from 1933 to 1945. He created numerous programs to provide relief to the unemployed and farmers while seeking economic recovery with the National Recovery Administration and other programs. He also instituted major regulatory reforms related to finance, communications, and labor, and presided over the end of Prohibition. In 1936, he won a landslide reelection with the economy having improved from 1933, but the economy relapsed into a deep recession in 1937 and 1938. He was unable to expand the Supreme Court in 1937, the same year the conservative coalition was formed to block the implementation of further New Deal programs and reforms. Major surviving programs and legislation implemented under him include the Securities and Exchange Commission, the National Labor Relations Act, the Federal Deposit Insurance Corporation, and Social Security. With World War II looming after 1938 in addition to the Japanese invasion of China and the aggression of Nazi Germany, he gave strong diplomatic and financial support to China, the United Kingdom, and the Soviet Union, while the U.S. remained officially neutral. Following the Japanese attack on Pearl Harbor on December 7, 1941, he obtained a declaration of war on Japan, Germany, and Italy. His leadership during challenging times has had a lasting impact on American politics.'
    },
    'truman': {
        'pimg': 'http://localhost:9000/images/Harry_Truman.jpg',
        'fullName': 'Harry S. Truman',
        'party': 'Democratic',
        'birthLocation': 'Lamar, Missouri',
        'dob': 'May 8, 1884',
        'died': 'December 26, 1972',
        'age': 88,
        'position': '33rd President of the United States',
        'inOffice': 'April 12, 1945 - January 20, 1953',
        'vicePresident' : 'None (First term), Alben W. Barkley (Second term)',
        'about': 'Harry S. Truman was an American statesman who served as the thirty-third president of the United States. He assumed the presidency following the death of Franklin D. Roosevelt. His presidency saw the end of World War II and the beginning of the Cold War. Truman made the decision to use atomic bombs on Hiroshima and Nagasaki, leading to Japan\'s surrender. He also implemented the Marshall Plan to aid European post-war recovery and played a key role in the founding of the United Nations. His administration engaged in an internationalist foreign policy by working closely with Britain. He staunchly denounced isolationism. He energized the New Deal coalition during the 1948 presidential election, despite a divided Democratic Party, and won a surprise victory against Republican Party nominee Thomas E. Dewey that secured his own presidential term. Truman presided over the onset of the Cold War in 1947. He oversaw the Berlin Airlift and Marshall Plan in 1948. With the involvement of the US in the Korean War of 1950–1953, South Korea repelled the invasion by North Korea. Domestically, the postwar economic challenges such as strikes and inflation created a mixed reaction over the effectiveness of his administration. In 1948, he proposed Congress pass comprehensive civil rights legislation. Congress refused, so Truman issued Executive Order 9980 and Executive Order 9981, which prohibited discrimination in federal agencies and desegregated the U.S. Armed Forces.'
    },
    'eisenhower': {
        'pimg': 'http://localhost:9000/images/Dwight_D_Eisenhower.jpg',
        'fullName': 'Dwight David Eisenhower',
        'party': 'Republican',
        'birthLocation': 'Denison, Texas',
        'dob': 'October 14, 1890',
        'died': 'March 28, 1969',
        'age': 78,
        'position': '34th President of the United States',
        'inOffice': 'January 20, 1953 - January 20, 1961',
        'vicePresident' : 'Richard Nixon',
        'about': 'Dwight D. Eisenhower, often referred to as "Ike," was an American military officer and statesman who served as the thirty-fourth president of the United States. He was a five-star general during World War II and served as Supreme Commander of the Allied Expeditionary Forces in Europe. He planned and supervised two of the most consequential military campaigns of World War II: Operation Torch in the North Africa campaign in 1942–1943 and the invasion of Normandy in 1944. As president, he focused on Cold War policies, including the doctrine of "massive retaliation" and the promotion of nuclear arms reduction. He also implemented the Interstate Highway System. After the United States entered World War II, he oversaw the invasions of North Africa and Sicily before supervising the invasions of France and Germany. After the war ended in Europe, he served as military governor of the American-occupied zone of Germany (1945), Army Chief of Staff (1945–1948), president of Columbia University (1948–1953), and as the first supreme commander of NATO (1951–1952). He continued Harry S. Truman\'s policy of recognizing Taiwan as the legitimate government of China, and he won congressional approval of the Formosa Resolution. His administration provided major aid to help the French fight off Vietnamese Communists in the First Indochina War. In 1957, following the Soviet launch of Sputnik, he led the American response which included the creation of NASA and the establishment of a stronger, science-based education via the National Defense Education Act. The Soviet Union began to reinforce their own space program, escalating the Space Race. His two terms saw unprecedented economic prosperity except for a minor recession in 1958.'
    },
    'kennedy': {
        'pimg': 'http://localhost:9000/images/John_F_Kennedy.jpg',
        'fullName': 'John Fitzgerald Kennedy',
        'party': 'Democratic',
        'birthLocation': 'Brookline, Massachusetts',
        'dob': 'May 29, 1917',
        'died': 'November 22, 1963',
        'age': 46,
        'position': '35th President of the United States',
        'inOffice': 'January 20, 1961 - November 22, 1963',
        'vicePresident' : 'Lyndon B. Johnson',
        'about': 'John F. Kennedy, often known as JFK, was an American statesman and politician who served as the thirty-fifth president of the United States from January 20, 1961, until his assassination in Dallas on November 22, 1963. He was the youngest person elected president. He was known for his charismatic presence and youthful energy. He graduated from Harvard University in 1940, joining the U.S. Naval Reserve the following year. During World War II, he commanded PT boats in the Pacific theater. His survival following the sinking of PT-109 and his rescue of his fellow sailors made him a war hero and earned the Navy and Marine Corps Medal, but left him with serious injuries. His presidency faced challenges such as the Cuban Missile Crisis and the early years of the civil rights movement. His presidency saw high tensions with communist states in the Cold War. He increased the number of American military advisers in South Vietnam, and the Strategic Hamlet Program began during his presidency. In 1961, he authorized attempts to overthrow the Cuban government of Fidel Castro in the failed Bay of Pigs Invasion and Operation Mongoose. In October 1962, U.S. spy planes discovered Soviet missile bases had been deployed in Cuba. The resulting period of tensions, termed the Cuban Missile Crisis, nearly resulted in nuclear war. In August 1961, after East German troops erected the Berlin Wall, he sent an army convoy to reassure West Berliners of U.S. support, and delivered one of his most famous speeches in West Berlin in June 1963. In 1963, he signed the first nuclear weapons treaty. He presided over the establishment of the Peace Corps, Alliance for Progress with Latin America, and the continuation of the Apollo program with the goal of landing a man on the Moon before 1970. He supported the civil rights movement but was only somewhat successful in passing his New Frontier domestic policies.'
    },
    'ljohnson': {
        'pimg': 'http://localhost:9000/images/Lyndon_Johnson.jpg',
        'fullName': 'Lyndon Baines Johnson',
        'party': 'Democratic',
        'birthLocation': 'Stonewall, Texas',
        'dob': 'August 27, 1908',
        'died': 'January 22, 1973',
        'age': 64,
        'position': '36th President of the United States',
        'inOffice': 'November 22, 1963 - January 20, 1969',
        'vicePresident' : 'None (First term), Hubert Humphrey (Second term)',
        'about': 'Lyndon B. Johnson, often referred to as LBJ, was an American statesman and politician who served as the thirty-sixth president of the United States. He assumed the presidency following the assassination of John F. Kennedy. The following year, he was elected to the presidency in a landslide, winning the largest share of the popular vote for the Democratic Party in history, and the highest for any candidate since the advent of widespread popular elections in the 1820s. His presidency is known for the passage of landmark civil rights legislation, including the Civil Rights Act of 1964 and the Voting Rights Act of 1965. He also escalated U.S. involvement in the Vietnam War, facing criticism and protests. His Great Society was aimed at expanding civil rights, public broadcasting, access to health care, aid to education and the arts, urban and rural development, and public services. He sought to create better living conditions for low-income Americans by spearheading the war on poverty. As part of these efforts, he signed the Social Security Amendments of 1965, which resulted in the creation of Medicare and Medicaid. He made the Apollo program a national priority; enacted the Higher Education Act of 1965, which established federally insured student loans; and signed the Immigration and Nationality Act of 1965, which laid the groundwork for U.S. immigration policy today. During his presidency, the American political landscape transformed significantly, as white Southerners who were once staunch Democrats began moving to the Republican Party and Black voters who sporadically supported the Democrats prior to 1964 began shifting towards the party in historic numbers. Due to his domestic agenda, his presidency marked the peak of modern American liberalism in the 20th century.'
    },
    'nixon': {
        'pimg': 'http://localhost:9000/images/Richard_Nixon.jpg',
        'fullName': 'Richard Milhous Nixon',
        'party': 'Republican',
        'birthLocation': 'Yorba Linda, California',
        'dob': 'January 9, 1913',
        'died': 'April 22, 1994',
        'age': 81,
        'position': '37th President of the United States',
        'inOffice': 'January 20, 1969 - August 9, 1974',
        'vicePresident' : 'Spiro Agnew (First term), Gerald Ford (Second term)',
        'about': 'Richard Nixon was an American statesman and politician who served as the thirty-seventh president of the United States. He had previously served as the vice president under Dwight D. Eisenhower. His presidency was marked by significant events such as the Apollo 11 moon landing and the normalization of relations with China. He ended American involvement in Vietnam combat in 1973 and the military draft in the same year. His visit to China in 1972 eventually led to diplomatic relations between the two nations, and he also then concluded the Anti-Ballistic Missile Treaty with the Soviet Union. Domestically, Nixon pushed for the Controlled Substances Act and began the war on drugs. His first term took place at the height of the American environmental movement and enacted many progressive environmental policy shifts; his administration created the Environmental Protection Agency and passed legislation such as the Endangered Species Act and the Clean Air Acts. He implemented the ratified Twenty-sixth Amendment, which lowered the voting age from 21 to 18, and enforced the desegregation of Southern schools. Under him, relations with Native Americans improved, seeing an increase in self-determination for Native Americans and his administration rescinded the termination policy. Nixon imposed wage and price controls for 90 days, began the war on cancer, and presided over the Apollo 11 Moon landing, which signaled the end of the Space Race. However, his administration also faced controversies, including the Watergate scandal, which led to his resignation.'
    },
    'ford': {
        'pimg': 'http://localhost:9000/images/Gerald_Ford.jpg',
        'fullName': 'Gerald Rudolph Ford Jr.',
        'party': 'Republican',
        'birthLocation': 'Omaha, Nebraska',
        'dob': 'July 14, 1913',
        'died': 'December 26, 2006',
        'age': 93,
        'position': '38th President of the United States',
        'inOffice': 'August 9, 1974 - January 20, 1977',
        'vicePresident' : 'None (Aug–Dec 1974), Nelson Rockefeller (Dec. 1974 – 1977)',
        'about': 'Gerald R. Ford was an American statesman who served as the thirty-eighth president of the United States. He succeeded to the presidency when Nixon resigned in 1974, but was defeated for election to a full term in 1976. Ford is the only person to become U.S. president without winning an election for president or vice president. His presidency focused on stabilizing the nation after the Watergate scandal and addressing economic challenges. He is known for granting a pardon to Nixon for any crimes he may have committed while in office, a decision that was widely debated. He also faced challenges such as inflation and the fall of Saigon, marking the end of the Vietnam War. Domestically, Ford presided over the worst economy in the four decades since the Great Depression, with growing inflation and a recession. Foreign policy was characterized in procedural terms by the increased role Congress began to play, and by the corresponding curb on the powers of the president. He signed the Helsinki Accords, which marked a move toward détente in the Cold War. With the collapse of South Vietnam nine months into his presidency, U.S. involvement in the Vietnam War essentially ended. In the 1976 Republican presidential primary, Ford defeated Ronald Reagan for the Republican nomination, but narrowly lost the presidential election to the Democratic challenger, Jimmy Carter.'
    },
    'carter': {
        'pimg': 'http://localhost:9000/images/Jimmy_Carter.jpg',
        'fullName': 'James Earl Carter Jr.',
        'party': 'Democratic',
        'birthLocation': 'Plains, Georgia',
        'dob': 'October 1, 1924',
        'died': 'Not yet',
        'age': 99,
        'position': '39th President of the United States',
        'inOffice': 'January 20, 1977 - January 20, 1981',
        'vicePresident' : 'Walter Mondale',
        'about': 'Jimmy Carter is an American statesman and former president who served as the thirty-ninth president of the United States. He was a peanut farmer and former governor of Georgia before becoming president. At age 99, he is both the oldest living former U.S. president and the longest-lived president in U.S. history. He graduated from the U.S. Naval Academy in 1946 and joined the U.S. Navy\'s submarine service. He returned home afterward and revived his family\'s peanut-growing business. He then manifested his opposition to racial segregation, supported the growing civil rights movement, and became an activist within the Democratic Party. He pardoned all Vietnam War draft evaders on his second day in office. He created a national energy policy that included conservation, price control, and new technology. Carter successfully pursued the Camp David Accords, the Panama Canal Treaties, and the second round of Strategic Arms Limitation Talks. He also confronted stagflation. His administration established the U.S. Department of Energy and the Department of Education. The end of his presidency was marked by the 1979–1981 Iran hostage crisis, the 1979 energy crisis, the Three Mile Island accident, the Nicaraguan Revolution, and the Soviet invasion of Afghanistan. In response to the invasion, Carter escalated the Cold War by ending détente, imposing a grain embargo against the Soviets, enunciating the Carter Doctrine, and leading the multinational boycott of the 1980 Summer Olympics in Moscow. He lost the 1980 presidential election in a landslide to Republican nominee Ronald Reagan. His post-presidential years have been marked by his humanitarian efforts, including work with Habitat for Humanity.'
    },
    'reagan': {
        'pimg': 'http://localhost:9000/images/Ronald_Reagan.jpg',
        'fullName': 'Ronald Wilson Reagan',
        'party': 'Republican (from 1962), Democratic (until 1962)',
        'birthLocation': 'Tampico, Illinois',
        'dob': 'February 6, 1911',
        'died': 'June 5, 2004',
        'age': 93,
        'position': '40th President of the United States',
        'inOffice': 'January 20, 1981 - January 20, 1989',
        'vicePresident' : 'George H. W. Bush',
        'about': 'Ronald Reagan was an American actor and politician who served as the fortieth president of the United States. He had a successful career in Hollywood before entering politics. His presidency constituted the Reagan era, and he is considered one of the most prominent conservative figures in American history. His administration faced challenges such as the Cold War, the Strategic Defense Initiative (SDI), and the Iran-Contra affair. In his first term, he implemented "Reaganomics", which involved economic deregulation and cuts in both taxes and government spending during a period of stagflation. He escalated an arms race and transitioned Cold War policy away from détente with the Soviet Union. Reagan also ordered the invasion of Grenada in 1983. Additionally, he survived an assassination attempt, fought public-sector labor unions, expanded the war on drugs, and was slow to respond to the AIDS epidemic in the United States, which began early in his presidency. Foreign affairs dominated his second term, including the 1986 bombing of Libya, the Iran–Iraq War, the secret and illegal sale of arms to Iran to fund the Contras, and a more conciliatory approach in talks with Soviet leader Mikhail Gorbachev that culminated in the Intermediate-Range Nuclear Forces Treaty. He left the presidency in 1989 with the American economy having seen a significant reduction of inflation, the unemployment rate having fallen, and the United States having entered its then-longest peacetime expansion. At the same time, the national debt had nearly tripled since 1981 as a result of his cuts in taxes and increased military spending, despite cuts to domestic discretionary spending. His policies also helped contribute to the end of the Cold War and the end of Soviet communism.'
    },
    'ghbush': {
        'pimg': 'http://localhost:9000/images/George_H_W_Bush.jpg',
        'fullName': 'George Herbert Walker Bush',
        'party': 'Republican',
        'birthLocation': 'Milton, Massachusetts',
        'dob': 'June 12, 1924',
        'died': 'November 30, 2018',
        'age': 94,
        'position': '41st President of the United States',
        'inOffice': 'January 20, 1989 - January 20, 1993',
        'vicePresident' : 'Dan Quayle',
        'about': 'George H. W. Bush, often referred to as Bush 41, was an American statesman and politician who served as the forty-first president of the United States. He had previously served as vice president under Ronald Reagan. He attended Phillips Academy before serving as a pilot in the United States Navy Reserve during World War II. Afterward, he graduated from Yale and moved to West Texas, where he established a successful oil company. Following an unsuccessful run for the United States Senate in 1964, he was elected to represent Texas\'s 7th congressional district in 1966. President Richard Nixon appointed him as the ambassador to the United Nations in 1971 and as chairman of the Republican National Committee in 1973. President Gerald Ford appointed him as the chief of the Liaison Office to the People\'s Republic of China in 1974 and as the director of Central Intelligence in 1976. His presidency saw significant events such as the end of the Cold War, the Gulf War, and efforts towards economic stability. His administration faced domestic challenges, including issues with taxes and a recession. He also played a key role in the reunification of Germany. He presided over the invasion of Panama and the Gulf War, ending the Iraqi occupation of Kuwait in the latter conflict. Though the agreement was not ratified until after he left office, he negotiated and signed the North American Free Trade Agreement, which created a trade bloc consisting of the United States, Canada and Mexico. Domestically, he reneged on a 1988 campaign promise by enacting legislation to raise taxes to justify reducing the budget deficit. He championed and signed three pieces of bipartisan legislation in 1990, the Americans with Disabilities Act, the Immigration Act and the Clean Air Act Amendments. He also appointed David Souter and Clarence Thomas to the Supreme Court.'
    },
    'clinton': {
    'pimg': 'http://localhost:9000/images/Bill_Clinton.jpg',
    'fullName': 'Bill Clinton',
    'party': 'Democratic',
    'birthLocation': 'Hope, Arkansas',
    'dob': 'August 13, 1946',
    'died': 'Not yet',
    'age': 78,
    'position': '42nd President of the United States',
    'inOffice': 'January 20, 1993 - January 20, 2001',
    'vicePresident' : 'Al Gore',
    'about': 'William Jefferson Clinton (born William Jefferson Blythe III) is an American statesman, author, and lawyer who served as the forty-second president of the United States. He was the third-youngest president in history. His presidency is known for its focus on economic prosperity, job creation, and a budget surplus. He signed into law welfare reform and the North American Free Trade Agreement (NAFTA) and the Violent Crime Control and Law Enforcement Act, but failed to pass his plan for national health care reform. The Republican Party won unified control of Congress for the first time in 40 years in the 1994 elections, but he was still comfortably re-elected president in 1996 against both the Republican Party nominee Bob Dole and the Reform Party nominee Perot. Starting in the mid-1990s, he began an ideological evolution as he became much more conservative in his domestic policy, advocating for and signing the Personal Responsibility and Work Opportunity Act, the State Children\'s Health Insurance Program and financial deregulation measures. He appointed Ruth Bader Ginsburg and Stephen Breyer to the U.S. Supreme Court. During the last three years of his presidency, the Congressional Budget Office reported a budget surplus—the first such surplus since 1969. In foreign policy, Clinton ordered U.S. military intervention in the Bosnian and Kosovo wars, eventually signing the Dayton Peace agreement. He also called for the expansion of NATO in Eastern Europe and many former Warsaw Pact members joined NATO during his presidency. His foreign policy in the Middle East saw him sign the Iraq Liberation Act which gave aid to groups against Saddam Hussein. He also participated in the Oslo I Accord and Camp David Summit to advance the Israeli–Palestinian peace process, and assisted the Northern Ireland peace process. His policies reflected a centrist "Third Way" political philosophy, became known as a New Democrat. His presidency also faced controversies, including the Monica Lewinsky scandal, which led to his impeachment by the House of Representatives, though he was acquitted by the Senate. He presided over the longest period of peacetime economic expansion in American history.'
    },
    'gwbush': {
        'pimg': 'http://localhost:9000/images/George_W_Bush.jpg',
        'fullName': 'George Walker Bush',
        'party': 'Republican',
        'birthLocation': 'New Haven, Connecticut',
        'dob': 'July 6, 1946',
        'died': 'Not yet',
        'age': 76,
        'position': '43rd President of the United States',
        'inOffice': 'January 20, 2001 - January 20, 2009',
        'vicePresident' : 'Dick Cheney',
        'about': 'George W. Bush is an American politician and businessman who served as the forty-third president of the United States from 2001 to 2009. He is the son of President George H. W. Bush. He flew warplanes in the Texas Air National Guard in his twenties. After graduating from Harvard Business School in 1975, he worked in the oil industry. He later co-owned the Texas Rangers of Major League Baseball before being elected governor of Texas in 1994. As governor, he successfully sponsored legislation for tort reform, increased education funding, set higher standards for schools, and reformed the criminal justice system. He also helped make Texas the country\'s leading producer of wind-powered electricity. He focused on issues such as education reform bill, the No Child Left Behind Act, tax cuts, and the War on Terror during his presidency. He pushed for socially conservative efforts such as the Partial-Birth Abortion Ban Act and faith-based initiatives. He also initiated the President\'s Emergency Plan for AIDS Relief in 2003 to address the AIDS epidemic. His administration faced significant challenges, including the September 11 terrorist attacks and the wars in Afghanistan and Iraq. Bush ordered the 2001 invasion of Afghanistan in an effort to overthrow the Taliban, destroy al-Qaeda, and capture Osama bin Laden. He signed the Patriot Act to authorize surveillance of suspected terrorists. He ordered the 2003 invasion of Iraq on the inaccurate beliefs that Saddam Hussein\'s regime possessed weapons of mass destruction and developed ties with al-Qaeda. He later signed the Medicare Modernization Act, which created Medicare Part D. He also implemented the Medicare Prescription Drug improvement. During his second term, he reached multiple free trade agreements.'
    },
    'obama': {
        'pimg': 'http://localhost:9000/images/Barack_Obama.jpg',
        'fullName': 'Barack Hussein Obama II',
        'party' : 'Democratic',
        'birthLocation': 'Honolulu, Hawaii',
        'dob': 'August 4, 1961',
        'died': 'Not yet',
        'age': 61,
        'position': '44th President of the United States',
        'inOffice': 'January 20, 2009 - January 20, 2017',
        'vicePresident' : 'Joe Biden',
        'about': 'Barack Obama is an American attorney, author, and politician who served as the forty-fourth president of the United States from 2009 to 2017. He was the first African American president of the United States. Nine months after his inauguration, he was named the 2009 Nobel Peace Prize laureate, a decision that drew a mixture of praise and criticism. Obama\'s first-term actions addressed the global financial crisis, and included a major stimulus package, to guide the economy in recovering from the Great Recession, a partial extension of George W. Bush\'s tax cuts, legislation to reform health care, a major financial regulation reform bill, and the end of a major U.S. military presence in Iraq. He also appointed Supreme Court justices Sonia Sotomayor and Elena Kagan, the former being the first Hispanic American on the Supreme Court. His presidency is known for the Affordable Care Act, the killing of Osama bin Laden, and the signing of the Dodd-Frank Wall Street Reform and Consumer Protection Act. He also focused on issues such as climate change, immigration reform, and improved relations with Cuba. He also ordered military involvement in Libya in order to implement UN Security Council Resolution 1973, contributing to the overthrow of Muammar Gaddafi.  In his second term, he took steps to combat climate change, signing a major international climate agreement and an executive order to limit carbon emissions. He negotiated a nuclear agreement with Iran. The number of American soldiers in Afghanistan fell dramatically during his second term, though U.S. soldiers remained in the country throughout his presidency. He promoted inclusion for LGBT Americans, and during his presidency the Supreme Court struck down same-sex marriage bans as unconstitutional in Obergefell v. Hodges.'
    },
    'trump': {
        'pimg': 'http://localhost:9000/images/Donald_Trump.jpg',
        'fullName': 'Donald John Trump',
        'party': 'Republican',
        'birthLocation': 'Queens, New York City',
        'dob': 'June 14, 1946',
        'died': 'Not yet',
        'age': 78,
        'position': '45th President of the United States',
        'inOffice': 'January 20, 2017 - January 20, 2021',
        'vicePresident' : 'Mike Pence',
        'about': 'Donald Trump is an American businessman, television personality, and politician who served as the 45th president of the United States. He\'s a real estate developer. He received a Bachelor degree in economics from the University of Pennsylvania in 1968. His father named him president of his real estate business in 1971. He renamed it the Trump Organization and reoriented the company toward building and renovating skyscrapers, hotels, casinos, and golf courses. After a series of business failures in the late twentieth century, he successfully launched side ventures that required little capital, mostly by licensing the Trump name. From 2004 to 2015, he co-produced and hosted the reality television series The Apprentice. He and his businesses have been plaintiff or defendant in more than 4,000 state and federal legal actions, including six business bankruptcies. During his campaign, his political positions were described as populist, protectionist, isolationist, and nationalist. His election and policies sparked numerous protests. He was the first U.S. president with no prior military or government experience. As president, he ordered a travel ban on citizens from several Muslim-majority countries, diverted military funding toward building a wall on the U.S.-Mexico border, and implemented a policy of family separations for migrants detained at the U.S. border. He weakened environmental protections, rolling back more than 100 environmental policies and regulations. He signed the Tax Cuts and Jobs Act of 2017, which cut taxes for individuals and businesses and rescinded the individual health insurance mandate penalty of the Affordable Care Act. He reacted slowly to the COVID-19 pandemic, ignored or contradicted many recommendations from health officials, used political pressure to interfere with testing efforts, and spread misinformation about unproven treatments. He initiated a trade war with China and withdrew the U.S. from the proposed Trans-Pacific Partnership trade agreement, the Paris Agreement on climate change, and the Iran nuclear deal. He met with North Korean leader Kim Jong Un 3 times but made no progress on denuclearization. His administration made efforts to broker peace agreements in the Middle East. He faced impeachment twice by the House of Reps but was acquitted both by senate. He appointed 3 justices to the supreme court. He focused on issues such as immigration reform, tax cuts, and deregulation during his presidency. '
    },
    'biden': {
        'pimg': 'http://localhost:9000/images/Joe_Biden.jpg',
        'fullName': 'Joseph Robinette Biden Jr.',
        'party': 'Democratic',
        'birthLocation': 'Scranton, Pennsylvania',
        'dob': 'November 20, 1942',
        'died': 'Not yet',
        'age': 82,
        'position': '46th President of the United States',
        'inOffice': 'January 20, 2021 - Present',
        'vicePresident' : 'Kamala Harris',
        'about': 'Joe Biden is an American statesman and politician who is the forty-sixth president of the United States. He served as vice president under Barack Obama from 2009 to 2017. He graduated from the University of Delaware before earning his law degree from Syracuse University. Before his presidency, he had a long career in the U.S. Senate, representing Delaware. As a senator, he drafted and led the effort to pass the Violent Crime Control and Law Enforcement Act and the Violence Against Women Act. He also oversaw six U.S. Supreme Court confirmation hearings, including the contentious hearings for Robert Bork and Clarence Thomas. He ran unsuccessfully for the Democratic presidential nomination in 1988 and 2008. His administration has focused on issues such as the COVID-19 pandemic, economic recovery, climate change, and social justice. As president, he signed the American Rescue Plan Act in response to the COVID-19 pandemic and subsequent recession. He signed bipartisan bills on infrastructure and manufacturing. He proposed the Build Back Better Act, which failed in Congress, but aspects of which were incorporated into the Inflation Reduction Act that he signed into law in 2022. He appointed Ketanji Brown Jackson to the Supreme Court. He worked with congressional Republicans to resolve the 2023 United States debt-ceiling crisis by negotiating a deal to raise the debt ceiling. In foreign policy, he restored America\'s membership in the Paris Agreement. He oversaw the complete withdrawal of U.S. troops from Afghanistan that ended the war in Afghanistan, during which the Afghan government collapsed and the Taliban seized control. He responded to the Russian invasion of Ukraine by imposing sanctions on Russia and authorizing civilian and military aid to Ukraine. During the Israel–Hamas war, he announced military support for Israel, and condemned the actions of Hamas and other Palestinian militants as terrorism. He is the oldest president in U.S. history, and the first to have a female vice president.'
    }
}



app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:lastName', (request, response) => {
    const presidentName = request.params.lastName.toLocaleLowerCase()
    if (presidents[presidentName]){
        response.json(presidents[presidentName])
    }else{
        response.json(presidents['unknown'])
    }

})

app.listen(process.env.PORT || PORT, () =>{
    console.log(`The server is now running on port ${PORT}!`)
})